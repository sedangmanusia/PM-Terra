import React, { useState } from 'react';
import { ScrollView, View, ImageBackground, Text, StyleSheet, TextInput } from 'react-native';
import { fontType, colors } from '../../theme';
import { blogData } from '../../data';

const ItemKomunitas = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredData = blogData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{backgroundColor: colors.lightGreen()}}
      contentContainerStyle={styles.listBlog}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kegiatan Komunitas</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Cari kegiatan..."
          placeholderTextColor={colors.black(0.6)}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {filteredData.map((blog, index) => (
        <View key={index} style={styles.cardItem}>
          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
            source={{ uri: blog.image }}>
            <View style={styles.cardContent}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{blog.title}</Text>
                <Text style={styles.cardText}>{blog.date}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fontType['Poppins-Bold'],
    color: colors.black(),
    marginBottom: 15,
  },
  searchBar: {
    backgroundColor: colors.darkGreen(),
    borderRadius: 10,
    padding: 10,
    color: colors.lightGreen(),
    fontFamily: fontType['Poppins-Regular'],
  },
  listBlog: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 20,
    backgroundColor: colors.lightGreen(),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  cardItem: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 15,
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)', // opsional agar teks lebih terbaca
  },
  cardInfo: {
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 14,
    color: colors.white(),
    fontFamily: fontType['Poppins-Bold'], // opsional jika pakai font custom
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    marginTop: 5,
    fontFamily: fontType['Poppins-Regular'],
  },
});

export default ItemKomunitas;