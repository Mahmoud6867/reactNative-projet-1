import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Image style={{width:300,height:600}} source={{uri:"https://images.unsplash.com/photo-1570280406792-bf58b7c59247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}}></Image>
        <Image style={{width:300,height:600}} source={{uri:"https://robbreport.com/wp-content/uploads/2021/12/1-23.jpg?w=800"}}></Image>
        <Image style={{width:300,height:600}} source={{uri:"https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg"}}></Image>
        <Image style={{width:300,height:600}} source={{uri:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/mclaren-720s_0.jpg?itok=wZbSZ3FZ"}}></Image>
        <Image style={{width:300,height:600}} source={{uri:"https://www.supercars.net/blog/wp-content/uploads/2023/05/Bugatti-400-drive-2023-1-791x527.jpg"}}></Image>
        <Image style={{width:300,height:600}} source={{uri:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}}></Image>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
