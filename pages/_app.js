import '../styles/globals.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'

const newTheme = createTheme({
  palette: {primary: {main: '#039dc1'}}
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={newTheme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
