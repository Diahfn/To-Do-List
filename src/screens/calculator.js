import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Calculator() {

  const [calculation, setCalculation] = useState('')
  const [answer, setAnswer] = useState('')
  const [lastSymbol, setLastSymbol] = useState('')


  function updateCalc(symb) {
    
    if (symb == 'AC') {
      setCalculation('')
      setAnswer('')
      setLastSymbol('')
      return
    }
    if (symb === '+') {
      setCalculation(prev => prev + symb)
      setLastSymbol(symb)
      return
    }
    if (symb === '-') {
      setCalculation(prev => prev + symb)
      setLastSymbol(symb)
      return
    }
    if (symb === '*') {
      setCalculation(prev => prev + symb)
      setLastSymbol(symb)
      return
    }
    if (symb === '%') {
      setCalculation(prev => prev + symb)
      return
    }
    if (symb === '/') {
      setCalculation(prev => prev + symb)
      setLastSymbol(symb)
      return
    }

    let detectAlreadyUpdate = false

    if (lastSymbol) {
      let arr = calculation.split('+')
      let n = arr[arr.length - 1] + symb
      let b = arr[arr.length - 2] + '+'

      n = formatNum(n)

      let f = ''

      for (let i = 0; i < arr.length - 2; i++) {
        f += arr[i] + '+'
      }
      setCalculation(f + b + n)
      detectAlreadyUpdate = true
    }
    if(lastSymbol == '-')
    {
      let arr = calculation.split('-')
      let n = arr[arr.length - 1] + symb
      let b = arr[arr.length - 2] + '-'

      n = formatNum(n)

      let f = ''

      for(var i = 0; i < arr.length - 2; i++){
        f += arr[i] + '-'
      }

      console.log('arr ' + arr)
      console.log(f + '' + b + ' ' + n)
            
      setCalculation(f + b + n)
      detectAlreadyUpdate = true
    }
    if(lastSymbol === '*')
    {
      let arr = calculation.split('*')
      let n = arr[arr.length - 1] + symb
      let b = arr[arr.length - 2] + '*'

      n = formatNum(n)

      let f = ''

      for(var i = 0; i < arr.length - 2; i++){
        f += arr[i] + '*'
      }            
      setCalculation(f + b + n)
      detectAlreadyUpdate = true
    }
    if(lastSymbol === '/')
    {
      let arr = calculation.split('/')
      let n = arr[arr.length - 1] + symb
      let b = arr[arr.length - 2] + '/'

      n = formatNum(n)

      let f = ''

      for(var i = 0; i < arr.length - 2; i++){
        f += arr[i] + "/"
      }            
      setCalculation(f + b + n)
      detectAlreadyUpdate = true
    }

    if(detectAlreadyUpdate === false)
    {
      setCalculation(prev => formatNum(prev + symb))

    }
  }
  

  function formatNum(number) {
    number = parseFloat(number.replace(/,/g, '')) 
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
  }

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
  }

  async function solve() {
    let newCalc = replaceAll(calculation, ",", '')
    newCalc = replaceAll(newCalc, '*', '*')
    newCalc = replaceAll(newCalc, '/', '/')
    newCalc = replaceAll(newCalc, '%', '/100')
    console.log('calc')
    console.log(newCalc)
    setAnswer(formatNum(JSON.stringify(eval(newCalc))))
  }

  function deleteLastSymbol()
    {
        setCalculation(calculation.slice(0, -1))
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Display</Text>
      <View style={styles.result}>
        <View style={styles.num}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>{calculation}</Text>
        </View>
        <View style={styles.num}>
          <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold', flexWrap: 'wrap'}} numberOfLines={3}>{answer}</Text>
        </View>
      </View>

      <View style={styles.del}>
        <TouchableOpacity onPress={() => updateCalc('AC')} style={[styles.button, {width: '40%' ,backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteLastSymbol()} style={[styles.button, {width: '40%' ,backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>⌦</Text>
          </TouchableOpacity>
      </View>
            
      <View style={styles.buttonList}>    

        <View>
          <TouchableOpacity onPress={() => updateCalc('1')} style={styles.button}>
            <Text style={styles.buttonNumber}>1</Text>
          </TouchableOpacity>           
          <TouchableOpacity onPress={() => updateCalc('3')} style={styles.button}>
            <Text style={styles.buttonNumber}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('5')} style={styles.button}>
            <Text style={styles.buttonNumber}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('7')} style={styles.button}>
            <Text style={styles.buttonNumber}>7</Text>
          </TouchableOpacity>
        </View>

        <View>
          
          <TouchableOpacity onPress={() => updateCalc('2')} style={styles.button}>
            <Text style={styles.buttonNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('4')} style={styles.button}>
            <Text style={styles.buttonNumber}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('6')} style={styles.button}>
            <Text style={styles.buttonNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('8')} style={styles.button}>
            <Text style={styles.buttonNumber}>8</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => updateCalc('-')} style={[styles.button, {backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('/')} style={[styles.button, {backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('%')} style={[styles.button, {backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('9')} style={styles.button}>
            <Text style={styles.buttonNumber}>9</Text>
          </TouchableOpacity>
        </View>
                
        <View style={{display: 'flex'}}>
          <TouchableOpacity onPress={() => updateCalc('+')} style={[styles.button, {backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('*')} style={[styles.button, {backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => solve()} style={[styles.button, {backgroundColor: 'rgba(147, 7, 7, 1)'}]}>
            <Text style={styles.symbol}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateCalc('0')} style={styles.button}>
            <Text style={styles.buttonNumber}>0</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 160, 160, 1)',
    height: '100%'
  },
  title: {
    marginHorizontal: 35,
    marginTop: 10,
    fontSize: 23,
    fontWeight: 600,
    color: '#fff'
  },
  buttonList: {
    margin: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  result: {
    backgroundColor:'#ECECEC',
    height: 100,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10
  },
  buttonNumber: {
    color: '#fff',
    fontSize: 33, 
    fontWeight: 'bold'
  },
  symbol: {
    fontSize: 33, 
    fontWeight: '900',
    color: '#fff',
  },
  num: {
    marginHorizontal: 30,
    textAlign: 'end',
    marginTop: 10
  },
  del: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    width: '100%'
  },
  button: {
    backgroundColor: '#FF5757',
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})