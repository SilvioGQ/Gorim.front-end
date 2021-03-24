import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity,ScrollView } from 'react-native';
import Button from '../../../../Components/Button';
import COLORS from '../../../../styles/Colors';
import DropDown from '../../../../Components/DropDown';
import Interrogacao from '../../../../assets/interrogacao.png';
import Pacote from '../../../../assets/agricultorIcones/pacote.png';
import Parcela from '../../../../assets/agricultorIcones/Parcela.png';
import Rice from '../../../../assets/agricultorIcones/rice.png'
const Tela = Dimensions.get('screen').width;
const Tela2 = Dimensions.get('screen').height;
export default function Aparcela({ navigation }) {
  const [icone, seticone] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const SelecteItem = ()=>{
    seticone(true)
    setDropDown(false)
  }
  const [dropDown2, setDropDown2] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView shows onPress={()=> setDropDown(true)}VerticalScrollIndicator={false}>
        <View style={styles.espaco}>
          <Image
            style={{ width: 66, height: 66, margin: '7%' }}
            source={Parcela}
          />
          <Text style={styles.header}>Aplicação {'\n'}em parcela</Text>
        </View>
        <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'Rubik_300Light', alignSelf:'flex-start', marginLeft:60}}>Nesta parcela:</Text>
        <View style={styles.coluna}>
          <TouchableOpacity onPress={()=> setDropDown(!dropDown)}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={icone ? Rice : Interrogacao}
              />
              <View>
                <Text style={styles.superior}>Sementes</Text>
                <Text style={styles.inferior}>-</Text>
              </View>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', position:'relative', top:-40, left:60}}>
            {dropDown && (
            <DropDown onClick={SelecteItem} nome='arroz' image={require('../../../../assets/agricultorIcones/rice.png')}/>
            )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setDropDown2(!dropDown2)}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={Interrogacao}
              />
              <View>
                <Text style={styles.superior}>Fertilizantes</Text>
                <Text style={styles.inferior}>-</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{justifyContent:'center', alignItems:'center', position:'relative', top:-40, left:60}}>
            {dropDown2 && (
            <DropDown onClick={()=>setDropDown2(false)} nome={'Fertilizante\ncomum'} image={require('../../../../assets/agricultorIcones/fertilizanteComum.png')}/>
            )}
            </View>
          <TouchableOpacity onPress={()=> setDropDown(true)}>
            <View style={styles.row}>
              <Image
                style={[styles.image, { width: 45, height: 48 }]}
                source={Pacote}
              />
              <View>
                <Text style={styles.superior}>Máquina</Text>
                <Text style={styles.inferior}>Pacote 1</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setDropDown(true)}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={Interrogacao}
              />
              <View>
                <Text style={styles.superior}>Pulverizador</Text>
                <Text style={styles.inferior}>-</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setDropDown(true)}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={Interrogacao}
              />
              <View>
                <Text style={styles.superior}>Agrotóxicos</Text>
                <Text style={styles.inferior}>-</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Button
          onClick={() => navigation.navigate('Agricultor1')}
          name='INICIAR PLANTIO'
        />
      </ScrollView>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:Tela2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:35,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginVertical: '5%',
    width: Tela,
  },
  espaco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 23,
  },
  coluna: {
    alignSelf: 'center',
  },
  inferior: {
    fontSize: 20,
  },
  superior: {
    fontFamily: 'Rubik_300Light',
    fontSize: 15,
  },
  image: {
    width: 25,
    height: 45,
    marginRight: '15%'
  }
});