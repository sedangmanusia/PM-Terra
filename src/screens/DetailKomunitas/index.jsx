import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, ActivityIndicator, Alert} from 'react-native';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {ArrowLeft, Like1, Receipt21, Message, Share, More, People} from 'iconsax-react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import FastImage from '@d11/react-native-fast-image';
import {fontType, colors} from '../../theme';
import {formatNumber} from '../../utils/formatNumber';
import {formatDate} from '../../utils/formatDate';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';

const DetailKomunitas = ({route}) => {
  const {communityId} = route.params;
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  const actionSheetRef = useRef(null);
  const navigation = useNavigation();

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useFocusEffect(
    useCallback(() => {
      getKomunitasById();
    }, [communityId])
  );

  const getKomunitasById = async () => {
    try {
      // ambil data blog berdasarkan spesifik ID dengan metode GET
      const response = await axios.get(
        `https://682405e465ba058033989a69.mockapi.io/api/detail_komunitas/${communityId}`,
      );
      // atur state blog berdasarkan response dari API
      setSelectedBlog(response.data);
      setLoading(false);
    } catch (error) {
      Alert.alert('error', `${error.Message}`);
    }
  };

  const navigateEdit = () => {
    if (selectedBlog && selectedBlog.id) {
      navigation.navigate('EditBlog', {blogId: selectedBlog.id});
      closeActionSheet();
    }
  };

  const handleDelete = async () => {
    if (!selectedBlog || !selectedBlog.id) return;
    setLoading(true);
    try {
      // hapus data blog dengan spesifik ID dengan metode DELETE
      const response = await axios.delete(`https://681378d5129f6313e2116491.mockapi.io/api/blog/${selectedBlog.id}`);
      if (response.status == 200) {
        closeActionSheet();
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert('Gagal Menhapus Blog', `${error.Message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <ActivityIndicator size="large" color={colors.darkGreen()} />
      </View>
    );
  }

  if (!selectedBlog) {
    return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <Text>Data komunitas tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.grey(0.6)} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>

      {/* Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 100,
        }}>
        <FastImage
          style={styles.image}
          source={{uri: selectedBlog.image}}
          resizeMode={FastImage.resizeMode.cover}
        />

        <Text style={styles.title}>{selectedBlog.title}</Text>
        <Text style={styles.date}>{selectedBlog.uploadDate}</Text>

        {/* Deskripsi */}
        <Text style={styles.description}>{selectedBlog.description}</Text>

        <View style={styles.deskripsiBox}>
          <Text style={styles.label}>Tanggal Acara:</Text>
          <Text style={styles.value}>{selectedBlog.eventDate}</Text>

          <Text style={styles.label}>Lokasi:</Text>
          <Text style={styles.value}>{selectedBlog.location}</Text>

          <Text style={styles.label}>Kuota Peserta:</Text>
          <Text style={styles.value}>{selectedBlog.quota} orang</Text>
        </View>

        {/* Button daftar */}
        <TouchableOpacity style={styles.buttonDaftar}>
          <Text style={styles.buttonText}>Daftar Sekarang</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Like1
            color={liked ? colors.blue() : colors.grey(0.6)}
            variant={liked ? 'Bold' : 'Linear'}
            size={24}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Message color={colors.grey(0.6)} variant="Linear" size={24} />
          <Text style={styles.info}>{selectedBlog.totalComments}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <People color={colors.grey(0.6)} variant="Linear" size={24} />
          <Text style={styles.info}>{selectedBlog.registered}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailKomunitas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
    paddingTop: 8,
  },
  image: {
    height: 200,
    borderRadius: 15,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    marginTop: 2,
  },
  description: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
    marginTop: 10,
    lineHeight: 18,
  },
  deskripsiBox: {
    marginTop: 20,
  },
  label: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
    color: colors.black(),
  },
  value: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
    color: colors.grey(),
    marginBottom: 10,
  },
  buttonDaftar: {
    backgroundColor: colors.darkGreen(),
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.white(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 40,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
});
