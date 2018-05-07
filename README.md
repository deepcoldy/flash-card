This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## How to begin

```
npm install

npm start

```

## develope in IOS

Install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from Mac Apple Store

Press i to open ios emulator

or 

```
npm install -g exp

exp send // Enter your mobile number or e-mail

```
Install [expo](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) on your iPhone

Open the link that received in email on your iPhone.(Make sure you installed expo first)

## Troubleshooting

I have to use Expo 27.0.0 which is Beta version. Because of this [bug](https://github.com/facebook/react-native/issues/18351) under `React 16.3.0-alpha.1`.
Context api in `React 16.3.0-alpha.1` will cause FlatList only show 10 item.

## CN Instuction

此项目使用React-Native、React-Navigation和[Antd-Design-Mobile](https://mobile.ant.design/docs/react/introduce-cn)制作而成。
同时使用了React-Native原生组件作为练习。
使用了React 16加入的Context Api代替Redux。
expo框架主要是用作推送通知和获取系统权限。


## License

[MIT]
