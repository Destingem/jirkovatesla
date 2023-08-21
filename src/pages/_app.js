import UIWrapper from '@/Components/hooks/UI/UIWrapper';
import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core';
import { Chivo, Inter, Fira_Code  } from 'next/font/google';
const chivo = Chivo({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const fira_code = Fira_Code({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
  
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      colors: {
        primaryN: ["#22b8cf"],
        neutral: ["#fff", "#F4F4F4", "#EEE", "#D6D9DF", "#CCC", "#AEB0B2", "#717074", "#393C41", "#222", "#171A20"],
        primary: ["#fdf2f4", "#fbe5e7", "#f5c9cf", "#ea929e", "#e77687", "#e95f72", "#e64a63", "#e83953", "#e52b45", "#e21837" ],
        cyan: ["#d0f9f2", "#baf6ef", "#a3f5e9", "#8ce6d8", "#70e4d2", "#5ae4cf", "#41e4cc", "#18e3c4"]

      },
      fontFamily: inter.style.fontFamily,
      fontFamilyMonospace: fira_code.style.fontFamily,
      headings: {fontFamily: chivo.style.fontFamily},
    other: {
      inter: inter.style.fontFamily,
      chivo: chivo.style.fontFamily,
      fira_code: fira_code.style.fontFamily,
    }
      
      
    }}>
      
    <UIWrapper>
  <Component {...pageProps} />
    </UIWrapper>
    </MantineProvider>)
}

