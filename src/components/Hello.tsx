import { View,Text,StyleSheet,type TextStyle } from 'react-native'

//引数（props）の型を定義
interface Props {
  children: string
  bang?: boolean // ?をつけるとpropsを指定してもしなくてもどちらでも良いことになる。
  style?: TextStyle
}

const Hello = (props: Props):JSX.Element => {
  //分割代入の記法
  const { children, bang, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children}{bang === true ? '!' : ''}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    color:'#fff',
    backgroundColor:'blue',
    fontSize: 40,
    fontWeight:'bold',
    padding: 16
  }
})

export default Hello
