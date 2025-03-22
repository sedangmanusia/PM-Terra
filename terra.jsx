import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity, FlatList} from 'react-native';
import {Element3, Receipt21, Clock, Message, SearchNormal, Home, Category, ProfileCircle, Shop, Setting2} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

const menuItems = [
  { id: '1', title: 'Home', icon: <Home size={24} color={colors.black()} /> },
  { id: '2', title: 'Category', icon: <Category size={24} color={colors.black()} /> },
  { id: '3', title: 'Profile', icon: <ProfileCircle size={24} color={colors.black()} /> },
  { id: '4', title: 'Shop', icon: <Shop size={24} color={colors.black()} /> },
  { id: '5', title: 'Settings', icon: <Setting2 size={24} color={colors.black()} /> },
  { id: '6', title: 'Messages', icon: <Message size={24} color={colors.black()} /> }
];

const MenuGrid = () => {
  return (
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
    />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WOCO.</Text>
        <Element3 color={colors.black()} variant="Linear" size={24} />
      </View>
<View style={searchBar.container}>
        <TextInput
            style={searchBar.input}
            placeholder="Search"
          />
          <Pressable style={searchBar.button}>
            <SearchNormal size={20} color={colors.white()} />
          </Pressable>
      </View>
      {/*<View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Latest</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Technology</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Fashion</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Health</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Lifestyle</Text>
          </View>
        </ScrollView>
      </View>*/}
    <MenuGrid/>
    <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
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
    marginRight: 10
  },
  button: {
    backgroundColor: colors.black(),
    padding: 8,
    borderRadius: 8
  },
  menuItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  menuText: {
    marginTop: 10,
    fontSize: 16
  }
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});
const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.grey(0.03),
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: colors.blue(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Exploring the World of Electric Cars
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>  
        </ScrollView>
        
        

        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>



          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    Boosting Traffic with SEO
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>


          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1492683962492-deef0ec456c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1756&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Food</Text>
                  <Text style={itemVertical.cardTitle}>
                    Culinary Adventures: Exploring Exotic Flavors
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>Sneaker Culture</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Lifestyle</Text>
                  <Text style={itemVertical.cardTitle}>
                    Balancing Work and Well-being
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Health</Text>
                  <Text style={itemVertical.cardTitle}>
                    Home Fitness Revolution
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Fashion</Text>
                  <Text style={itemVertical.cardTitle}>
                    Intersection of Fashion
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
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
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

