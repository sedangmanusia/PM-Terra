import { Home, Category, Shop, Message } from "iconsax-react-native";
import { fontType, colors } from './theme';

export const blogData = [
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
    {
      title: 'Sosialisasi Pembuatan Kompos Sampah Organik',
      date: 'Nov 10, 2023',
      image: 'https://i.pinimg.com/736x/a4/05/6c/a4056c10650fc5aa930fa29cb0522ba7.jpg',
    },
  ];
  
  export const productData = [
    {
      id: '1',
      category: 'Kantong Plastik',
      title: 'Kantong Plastik 1kg',
      stok: '1356',
      review: 89,
      image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
    },
  ];
  
  export const categories = [
    { id: '1', title: 'Terlaris' },
    { id: '2', title: 'Terbaru' },
    { id: '3', title: 'Diskon' },
  ];

  export const menuItems = [
    { id: '1', title: 'Beranda', icon: <Home size={24} color={colors.white()} /> },
    { id: '2', title: 'Produk', icon: <Category size={24} color={colors.white()} /> },
    { id: '3', title: 'Toko', icon: <Shop size={24} color={colors.white()} /> },
    { id: '4', title: 'Komunitas', icon: <Message size={24} color={colors.white()} /> },
  ];

  export const ProfileData = {
    profilePict:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    name: 'Arthur Conan Doyle',
    createdAt: '18 Mar, 2020',
    blogPosted: 29,
    following: 3000,
    follower: 3000,
  };