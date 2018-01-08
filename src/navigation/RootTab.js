'use strict';

import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoreMenu from './MoreMenu';

// Screens
import {
  Home,
  Profile,
  Events,
  JobBoard,
  Leaderboard,
  Resources,
  CheckIn,
  About
} from '../screens/';

const RootTab = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
          />
      ),
    },
  },
  Events: {
    screen: Events,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
          size ={26}
          style={{ color: tintColor }}
          />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
          />
      ),
    },
  },
  MoreMenu: {
    screen: MoreMenu,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-list' : 'ios-list-outline'}
          size ={26}
          style={{ color: tintColor }}
          />
      ),
    },
  },
},
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom'
  }
);

export default RootTab;