import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { Message, SearchNormal, Home, Category, Shop, Notification, Global, Box } from 'iconsax-react-native'; 
import { fontType, colors } from './src/theme';

const menuItems = [
  { id: '1', title: 'Beranda', icon: <Home size={24} color={colors.white()} /> },
  { id: '2', title: 'Produk', icon: <Category size={24} color={colors.white()} /> },
  { id: '3', title: 'Toko', icon: <Shop size={24} color={colors.white()} /> },
  { id: '4', title: 'Komunitas', icon: <Message size={24} color={colors.white()} /> },
];

const MenuGrid = () => {
  return (
    <View>
      <Text style={styles.menuTitle}>Menu Navigasi</Text>
      <FlatList
        data={menuItems}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem}>
            {item.icon}
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.menuGrid}
      />
    </View>
  );
};

const categories = [
  { id: '1', title: 'Terlaris' },
  { id: '2', title: 'Terbaru' },
  { id: '3', title: 'Diskon' },
];

const ListBlog = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.listBlog}>
      {blogData.map((blog, index) => (
        <View key={index} style={itemHorizontal.cardItem}>
          <ImageBackground
            style={itemHorizontal.cardImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
            source={{ uri: blog.image }}>
            <View style={itemHorizontal.cardContent}>
              <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>{blog.title}</Text>
                <Text style={itemHorizontal.cardText}>{blog.date}</Text>
              </View>
              <View style={itemHorizontal.cardIcon}>
                {/* Removed Receipt21 */}
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const blogData = [
  {
    title: 'Aksi Bersih Pantai di Tanjung Bayang',
    date: 'Nov 10, 2023',
    image: 'https://i.pinimg.com/474x/62/1e/7f/621e7f063c8f919a6b6b38bae402ac14.jpg',
  },
  {
    title: 'Kegiatan Tanam Pohon Bersama Komunitas',
    date: 'Nov 10, 2023',
    image: 'https://i.pinimg.com/474x/75/76/14/757614a938d3462d1d495b48c3ba6525.jpg',
  },
  {
    title: 'Edukasi Pengolahan Sampah Rumah Tangga',
    date: 'Nov 10, 2023',
    image: 'https://i.pinimg.com/474x/21/04/6e/21046eb75c410bdae1c13c772b83a910.jpg',
  },
];

const data = [
  {
    id: '1',
    category: 'Kantong Plastik',
    title: 'Kantong Plastik 1kg',
    stok: '1356',
    review: 89,
    image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Global color={colors.black()} variant="Linear" size={24} />
      <Text style={[styles.title, { marginLeft: 5 }]}>Terra</Text>
      </View>
      <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={searchBar.container}>
        <TextInput style={searchBar.input} placeholder="Cari" />
        <Pressable style={searchBar.button}>
          <SearchNormal size={20} color={colors.white()} />
        </Pressable>
      </View>
      <ListBlog />
      <MenuGrid />
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <View key={category.id} style={categoryStyles.item}>
              <Text style={categoryStyles.title}>{category.title}</Text>
            </View>
          ))}
          <TouchableOpacity style={categoryStyles.seeAll}>
            <Text style={categoryStyles.seeAllText}>Semua Produk</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Image style={styles.cardImage} source={{ uri: item.image }} />
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.textContainer}>
                  <Text style={styles.cardCategory}>{item.category}</Text>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
                {/* Removed Receipt21 */}
                </View>
                <View style={styles.cardInfo}>
                  <View style={styles.stockContainer}>
                    <Box size={10} color={colors.white()} />
                    <Text style={styles.cardText}>Stok = {item.stok}</Text> {/* Teks Stok */}
                  </View>
                  <View style={styles.reviewContainer}>
                    <Message size={10} color={colors.white()} />
                    <Text style={styles.cardText}>Review = {item.review}</Text> {/* Teks Review */}
                  </View>
                </View>
              </View>
            </View>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 24,
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.black(),
    padding: 8,
    borderRadius: 8,
  },
  menuItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: colors.darkGreen(),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: colors.black(),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.white(),
  },
  menuGrid: {
    paddingBottom: 20,
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: colors.darkGreen(),
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '70%',
  },
  cardCategory: {
    fontSize: 12,
    color: colors.white(),
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white(),
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cardText: {
    fontSize: 12,
    color: colors.white(),
  },
});

const categoryStyles = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.darkGreen(),
    marginHorizontal: 5,
    justifyContent: 'center', // Center the content
    flex: 1, // Allow items to take equal space
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.white(),
  },
  seeAll: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    color: colors.black(),
  },
});

const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.darkGreen(),
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: colors.darkGreen(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
