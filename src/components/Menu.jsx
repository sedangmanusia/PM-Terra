import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Home, Category, Shop, Message } from 'iconsax-react-native';
import { colors } from '../theme';

const MenuGrid = ({menuItems}) => {
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

const styles = StyleSheet.create({
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 24,
    color: colors.black(),
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
});

export default MenuGrid;