import React,{useState,useEffect} from 'react';
import { StyleSheet,Text,View,SafeAreaView, Image, TouchableOpacity,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;

const App = () => {
  const [active_player, setActivePlayer] = useState('X');
  const [markers, setMarkers] = useState([null, null, null, null,null, null, null, null, null]) 

  useEffect(() => {
    if(active_player === "O")
      AIMove();

  })
  
  const AIMove = () =>
  {
    //Seeing possible options
    
  }


  const markPosition = (position) =>
  { 
    if(!markers[position])
    {
      let temp = [...markers];
    temp[position] = active_player;
    setMarkers(temp)
    if(active_player === 'X')  //If active player is X, switch to O, otherwise, switch to X
    {
      setActivePlayer('O')
    }
    else
    {
      setActivePlayer('X')
    }
    }
    
  } 
  const resetMarkers = () => {
    setMarkers([null, null, null, null,null, null, null, null, null])
    setActivePlayer('X')
  }
  
  const calculateWinner = (square) => {
    const lines =[
      [0,1,2],
      [3,4,5],                      //All of the possible winning scenarios - 8 total combinations
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
      
    
  ];
  for(let i = 0; i <lines.length; i++)
  {
    const[a,b,c] = lines[i];
    if(square[a] && square[a] === square[b] && square[a] === square[c])
    {
        return square[a];
    }
  }
    return null;

  }

  useEffect(() => {
    const winner = calculateWinner(markers);
    if(winner === 'X')
    {
      alert("Player X wins!");
    }
    else if(winner === 'O')
    {
      alert("Player O wins!");
    }
    
  },[markers])

  return(
      <SafeAreaView style={styles.body}>
        <View style={[styles.playerInfo,{backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075'}]}>
          <Text style={styles.playerTxt}>
            Player {active_player}'s turn
          </Text>
        </View>
        <View style={styles.mainContainer}>

          {/* Each cell given separate style to form the classic Tic-Tac-Toe grid  */}

          {/* Cell 1 */}
          <TouchableOpacity style={styles.cell1} onPress={()=>markPosition(0)}>
              {markers[0] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
              {markers[0] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}
          </TouchableOpacity>


          {/* Cell 2 */}
          <TouchableOpacity style={styles.cell2} onPress={()=>markPosition(1)}>
              {markers[1] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
              {markers[1] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}
          </TouchableOpacity>

          {/* Cell 3 */}
          <TouchableOpacity style={styles.cell3} onPress={()=>markPosition(2)}>
              {markers[2] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
              {markers[2] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}

          </TouchableOpacity>

          {/* Cell 4 */}
          <TouchableOpacity style={styles.cell4} onPress={()=>markPosition(3)}>
              {markers[3] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
              {markers[3] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}

          </TouchableOpacity>


          {/* Cell 5 */}
          <TouchableOpacity style={styles.cell5} onPress={()=>markPosition(4)}>
             {markers[4] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
             {markers[4] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}

          </TouchableOpacity>


          {/* Cell 6 */}
          <TouchableOpacity style={styles.cell6} onPress={()=>markPosition(5)}>
             {markers[5] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
             {markers[5] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}

          </TouchableOpacity>


          {/* Cell 7 */}
          <TouchableOpacity style={styles.cell7} onPress={()=>markPosition(6)}>
              {markers[6] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
              {markers[6] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}

          </TouchableOpacity>


          {/* Cell 8 */}
          <TouchableOpacity style={styles.cell8} onPress={()=>markPosition(7)}>
             {markers[7] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
             {markers[7] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}

          </TouchableOpacity>


          {/* Cell 9 */}
          <TouchableOpacity style={styles.cell9} onPress={()=>markPosition(8)}>
              {markers[8] === 'X' && <Image source={require('./assets/cross.png')} style={styles.icon}/>}
              {markers[8] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon}/>}
          </TouchableOpacity>

          

        </View>
        <TouchableOpacity style={styles.replayButton} onPress={resetMarkers}>

          <Image source = {require('./assets/replay.png')} style={styles.replayIcon}/>
          </TouchableOpacity>

      </SafeAreaView>


    )
}

export default App

const styles = StyleSheet.create({
  body:{flex: 1,
    backgroundColor:'#fff'},
  
  playerInfo:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal:20,
    paddingVertical:20,
    marginTop:30,
  },  
  
  playerTxt:{
    fontSize:20,
    fontWeight:'700',
    letterSpacing:1.2,
    color:'#fff',},

  mainContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    marginTop: 50,
  },

  cell1:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRightWidth:6,
    borderBottomWidth:6,
  },

  cell2:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth:6,
    borderLeftWidth:6,
    borderRightWidth:6,
  },

  cell3:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderLeftWidth:6,
    borderBottomWidth:6,
  },

  cell4:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth:6,
    borderTopWidth:6,
    borderRightWidth:6,
  },

  cell5:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth:6
  },

  cell6:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth:6,
    borderLeftWidth:6,
    borderBottomWidth:6,
  },

  cell7:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth:6,
    borderRightWidth:6,
  },

  cell8:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth:6,
    borderLeftWidth:6,
    borderRightWidth:6,
  },

  cell9:{
    width:windowWidth/3.2,
    height:windowWidth/3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth:6,
    borderLeftWidth:6,
  },
  
  icon:{
    height:60,
    width:60,
    transform: [{ translateY: 22 }],
  },

  replayButton:{
  position:'absolute',
  bottom:0,
  right:0,
},

replayIcon:{
  height:100,
  width:100,
  
}

}
)