import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { categories } from '../data'; // Import from data.js
import { colors } from '../theme';

const CategoryList = () => {
  return (
    <View style={styles.listCategory}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <View key={category.id} style={styles.item}>
            <Text style={styles.title}>{category.title}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.seeAll}>
          <Text style={styles.seeAllText}>Semua Produk</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listCategory: {
    paddingVertical: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.darkGreen(),
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Pjs-SemiBold', // Adjust according to your fontType
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
    fontFamily: 'Pjs-SemiBold', // Adjust according to your fontType
    fontSize: 14,
    color: colors.black(),
  },
});

export default CategoryList;