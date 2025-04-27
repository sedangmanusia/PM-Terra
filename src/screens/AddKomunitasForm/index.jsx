import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';

const AddKomunitasForm = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    uploadDate: '',
    eventDate: '',
    location: '',
    quota: '',
    image: '',
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleUpload = () => {
    console.log('Data yang akan diupload:', formData);
    // Tambahkan logika simpan ke database atau navigasi di sini
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Tambah Kegiatan</Text>
        </View>
      </View>

      {/* Form Input */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={input.borderDashed}>
          <TextInput
            placeholder="Judul kegiatan"
            value={formData.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>

        <View style={[input.borderDashed, {minHeight: 100}]}>
          <TextInput
            placeholder="Deskripsi kegiatan"
            value={formData.description}
            onChangeText={text => handleChange('description', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={input.text}
          />
        </View>

        <View style={input.borderDashed}>
          <TextInput
            placeholder="Tanggal upload (cth: Apr 15, 2025)"
            value={formData.uploadDate}
            onChangeText={text => handleChange('uploadDate', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>

        <View style={input.borderDashed}>
          <TextInput
            placeholder="Tanggal kegiatan"
            value={formData.eventDate}
            onChangeText={text => handleChange('eventDate', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>

        <View style={input.borderDashed}>
          <TextInput
            placeholder="Tempat kegiatan"
            value={formData.location}
            onChangeText={text => handleChange('location', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>

        <View style={input.borderDashed}>
          <TextInput
            placeholder="Kuota peserta (angka saja)"
            value={formData.quota}
            onChangeText={text => handleChange('quota', text)}
            keyboardType="numeric"
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>

        <View style={input.borderDashed}>
          <TextInput
            placeholder="Gambar (URL gambar)"
            value={formData.image}
            onChangeText={text => handleChange('image', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>
      </ScrollView>

      {/* Tombol Upload */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddKomunitasForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.darkGreen(),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
});

const input = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});