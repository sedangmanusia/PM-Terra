import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { SearchNormal, Notification, Global } from 'iconsax-react-native';
import { CategoryList, ListBlog, MenuGrid, ProductList } from './src/components';
import { blogData, productData, menuItems, categories } from './src/data';
import { fontType, colors } from './src/theme';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog data based on search query
  const filteredBlogData = blogData.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter product data based on search query
  const filteredProductData = productData.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Global color={colors.black()} variant="Linear" size={24} />
          <Text style={[styles.title, { marginLeft: 5 }]}>Terra</Text>
        </View>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Cari"
          value={searchQuery} // Bind the input value to the state
          onChangeText={setSearchQuery} // Update state on input change
        />
        <Pressable style={styles.button}>
          <SearchNormal size={20} color={colors.white()} />
        </Pressable>
      </View>
      <ListBlog blogData={filteredBlogData} /> {/* Use filtered blog data */}
      <MenuGrid menuItems={menuItems} />
      <CategoryList categories={categories} />
      <ProductList productData={filteredProductData} /> {/* Use filtered product data */}
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
    fontFamily: 'Pjs-ExtraBold', // Adjust according to your fontType
    color: colors.black(),
  },
  searchBar: {
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
