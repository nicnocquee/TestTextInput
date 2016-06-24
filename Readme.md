Wonder why `onLayout` not called in `TextInput`

```javascript
<TextInput
    ref="textInput"
    onLayout={(e) => {
      console.log('--- this is not called?')
    }}
    style={{height: 44, color: 'black', borderColor: 'black', borderWidth: 1, paddingHorizontal: 10, marginHorizontal: 10}}
    placeholder='text here'
    text={'cool'}
    placeholderTextColor={'rgba(0,0,0,.4)'}
    underlineColorAndroid='rgba(0,0,0,0)'
  />
```
