import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Akun, ItemKomunitas, DetailKomunitas, AddKomunitasForm} from '../screens';
import {Home2,Bag2,People,Shop,ProfileCircle,} from 'iconsax-react-native';
import {fontType, colors} from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.lightGreen(),
        tabBarInactiveTintColor: colors.white(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
          backgroundColor: colors.darkGreen(),
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
      }}>

      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Produk */}
      <Tab.Screen
        name="Produk"
        component={() => null} // sementara null/dummy
        options={{
          tabBarLabel: 'Produk',
          tabBarIcon: ({focused, color}) => (
            <Bag2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Komunitas */}
      <Tab.Screen
        name="Komunitas"
        component={ItemKomunitas}
        options={{
          tabBarLabel: 'Komunitas',
          tabBarIcon: ({focused, color}) => (
            <People
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Toko */}
      <Tab.Screen
        name="Toko"
        component={() => null} // sementara null/dummy
        options={{
          tabBarLabel: 'Toko',
          tabBarIcon: ({focused, color}) => (
            <Shop
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
      {/* Bottom Tab */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      {/* Detail Komunitas */}
      <Stack.Screen
        name="DetailKomunitas"
        component={DetailKomunitas}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* Add Komunitas Form */}
      <Stack.Screen
        name="AddKomunitasForm"
        component={AddKomunitasForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
