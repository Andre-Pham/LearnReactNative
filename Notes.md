# React Native Notes

## Styles

#### Stacks

https://reactnative.dev/docs/flexbox

To create a HStack/VStack, use `flexDirection` (**Flex Direction**)

`'column-reverse'` and `'row-reverse'` are also options.

To take a certain proportion of the screen, use `flex` (**Flex Direction**).

```
<View style={{flex: 1, backgroundColor: 'red'}} />
```

## Misc

#### Platform

```
paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
```

