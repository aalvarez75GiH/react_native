import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "EventEmitter.removeListener",
    "ViewPropTypes will be removed from React Native",
    "AsyncStorage has been extracted from react-native",
    "You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':",
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}

// other warnings:
// "[fuego-swr-keys-from-collection-path]",
// "ViewPropTypes will be removed from React Native",
// "AsyncStorage has been extracted from react-native",
// "EventEmitter.removeListener",
//     "Setting a timer for a long period of time",
//     "exported from 'deprecated-react-native-prop-types'.",
//     "Non-serializable values were found in the navigation state.",
//     "VirtualizedLists should never be nested inside plain ScrollViews",
