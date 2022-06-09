import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Welcome() {
  return (
    <View style={styles.container}>
        <View style={styles.day}>
            <Text style={{color:'red'}}>SUN  </Text><Text>   MUN    TUE    WED     THU    FRI     SAT</Text>
        </View>
        <View style={styles.outline}>
            <View style={styles.commonrow}>
                <View style={[styles.outerbox,styles.sunday]}>
                    <View style={[styles.innerbox,styles.sunday]}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
            </View>
            <View style={styles.commonrow}>
                <View style={[styles.outerbox,styles.sunday]}>
                    <View style={[styles.innerbox,styles.sunday]}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
            </View>
            <View style={styles.commonrow}>
                <View style={[styles.outerbox,styles.sunday]}>
                    <View style={[styles.innerbox,styles.sunday]}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
            </View>
            <View style={styles.commonrow}>
                <View style={[styles.outerbox,styles.sunday]}>
                    <View style={[styles.innerbox,styles.sunday]}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
            </View>
            <View style={[styles.commonrow,styles.bottom]}>
                <View style={[styles.outerbox,styles.sunday]}>
                    <View style={[styles.innerbox,styles.sunday]}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
                <View style={styles.outerbox}>
                    <View style={styles.innerbox}>

                    </View>
                </View>
            </View>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: '#fff',
  },
  day:{
      flex:1,
      flexDirection:'row',
      position:'absolute',
      top:'27%',
  },
  outline:{
      flex:1,
      position:'absolute',
      top:'30%',
      width:'90%',
      height:'60%',
      backgroundColor:'#fff',
      borderWidth:2,
      borderRadius:30,
      borderColor:'#000',
      alignItems:'center',
  },
  commonrow:{
      flex:1,
      flexDirection:'row',
      width:'95%',
      marginTop:5,
      justifyContent:'space-around',
  },

  bottom:{
      marginBottom:7,
  },
  outerbox:{
      flex:1,
      borderRadius:50,
      borderWidth:2,
      borderColor:'#000',
      margin:2,  
  },
  innerbox:{
    flex:1,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#000',
    margin:2, 
  },
  sunday:{
      borderColor:'red',
  }
});

export default Welcome;
