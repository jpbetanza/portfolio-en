import ameLogo from '../../assets/ameLogo.png'
import mara from '../../assets/mara.png'
import subtraiame from '../../assets/subtraiame.png'
import tcc from '../../assets/tcc.png'
import ceac from  '../../assets/ceac.png'

import bootstrap from '../../assets/bootstrap.png'
import django from '../../assets/django.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import matlab from '../../assets/matlab.png'

// Isso da erro, sei lá o pq
// import { ameLogo, mara, subtraiame, django, js, bootstrap, python, react, html, tailwind  } from "../../assets"

export const tools = [
    {nome: 'React',img: react},
    {nome: 'Tailwind',img: tailwind},
    {nome: 'Javascript',img: js},
    {nome: 'HTML',img: html},
    {nome: 'Python',img: python},
    {nome: 'Django',img: django},
]

export const db = [
    {
        nome:'CEAC',
        desc:'An institutional website in development for the spiritist center Amigos de Chico, in Natal - Brazil.',
        vercel: 'https://ceac.vercel.app/',
        url:'https://github.com/jpbetanza/CEAC',
        src: ceac,
        imgautor:'',
        utils: [react,tailwind,html,js],
    },
    {
        nome:'Programa AME',
        desc:'A website designed to support a project by doctorate students from the Department of Collective Health at the Federal University of Rio Grande do Norte (UFRN)',
        vercel: 'https://programa-ame.vercel.app/',
        url:'https://github.com/jpbetanza/Programa-AME',
        src: ameLogo,
        imgautor:'',
        utils: [django,python,bootstrap,html,js],
    },
    {
        nome:'Mara',
        desc:'Mara is a virtual keyboard that helps individuals with amyotrophic lateral schlerosis communicate with eye movements',
        vercel: 'https://mara2.vercel.app',
        url:'https://github.com/jpbetanza/Mara2',
        src: mara,
        imgautor: 'https://www.instagram.com/caro_peppe',
        utils: [react,tailwind,html,js],
    },
    {
        nome:'Subtraia-me',
        desc:'A friendly math game. Made for fun, are you able to win?',
        vercel: 'https://subtraia-me.vercel.app/',
        url:'https://github.com/jpbetanza/Subtraia.me',
        src: subtraiame,
        imgautor:'',
        utils: [react,tailwind,html,js],
    },
    {
        nome:'Pneumonia segmentation',
        desc:'My final undergraduate project focused on digital image processing. It involved the segmentation of COVID-19 pneumonia in tomographic images.',
        vercel: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS/blob/main/Segmenta%C3%A7%C3%A3odaPneumonia_Caro_2022.pdf',
        url: 'https://github.com/jpbetanza/SEGMENTACAO-DA-PNEUMONIA-CAUSADA-POR-COVID-19-EM-IMAGENS-TOMOGRAFICAS',
        src: tcc,
        imgautor:'',
        utils: [matlab]
    }
]