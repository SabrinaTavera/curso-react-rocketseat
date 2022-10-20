import { useState } from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'


function Timer() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary' />
      <Button variant='secundary' />
      <Button variant='success' />
      <Button variant='danger' />
      <Button />
    </ThemeProvider >
  )
}

export default Timer
