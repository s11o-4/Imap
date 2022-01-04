//Internal dependencies
import React from 'react';
import '../Maps.css'

//React-bootstrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Ciencia() {
    return (
        <div className='Ciencia'>
            <Title />
            <ContentTable />
            <ContentTabbed />
        </div>
    )
}

function Title() {
    return (
        <div>
            <h2 id='sub_title' class="text-center">
                Ciencia
            </h2>
        </div>
    )
}

function TableRowGenerator(props) {
    return (
        <tr>
            <td>
                {props.id}
            </td>
            <td>
                <span class="table_content_title">
                    {props.chanel_title + " - "}
                </span>
                {props.description}
                <br />
                <span class="btn_table">
                    <Button
                        variant="outline-dark"
                        target='blank'
                        href={props.link}
                    >
                        <span class="content_title">
                            Ver canal
                        </span>
                    </Button>
                </span>
            </td>
            <td>
                {props.comunity}
            </td>
            <td>
                {props.platforms}
            </td>
        </tr>
    )
}

const descriptions_json =
{
    'description':
        [
            [
                'Un elemento de la verdad. Videos de Ciencia y Tecnología ' +
                'doblados al español'
            ],
            [
                'Vídeos que explican cosas con nihilismo optimista. ' +
                'Somos un equipo pequeño que quiere que la ciencia se ' +
                'vea hermosa. Porque es hermosa.'
            ],
            [
                '¡Ciencia! ¡y con animaciones! El lado más loco (y real)' +
                'del Universo.'
            ],
            [
                'En CdeCiencia encontrarás vídeos tratando los temas más ' +
                'fascinantes de nuestro universo, y semanalmente un ' +
                'vídeo-resumen con las 8 noticias científicas más destacadas ' +
                'de la última semana.'
            ],
            [
                'Preguntarte nunca dejar debes. Si el conocimiento es lo ' +
                'tuyo, date una vuelta. A veces hay helado. Canal de ' +
                'Ciencia, canal de Ciencias, canal de Sapiencias. ' +
                'La misión de esta página es difundir el conocimiento. ' +
                ' El Robot representa la tecnología, presente y futuro, ' +
                'Platón representa el pasado y la filosofía, cosmología ' +
                'y en general la epistemología.'
            ],
            [
                'Encontrarás videos tratando sobre temas muy variados de ciencia. ' +
                'Todos contados de una forma muy enérgica e interesante. ' +
                'Entra y entederás mejor tu universo'
            ],
            [
                'Ciencia y cultura, por el placer de aprender. Una ' +
                'invitación para las mentes curiosas a despertar el ' +
                'sentido de la maravilla que sólo el conocimiento puede ' +
                'dar.'
            ],
            [
                'Esto es Antroporama, es decir, divulgación científica ' +
                'sobre el Ser Humano, nuestra conducta,  mente y nuestro ' +
                'secreto mejor guardado: el cerebro. ¡Quédate si te encanta ' +
                'conocer lo curiosa que puede ser nuestra especie!'
            ],
            [
                'Divulgación científica para mentes distraídas, ' +
                '¡ahora también en vídeo!'
            ],
            [
                '¡Divulgación, biomedicina y muchas cosas bonitas!'
            ],
            [
                'Por fin información de salud de la que te puedes fiar. ' +
                'Aquí es más importante el rigor que el número de suscriptores. '
            ],
            [
                'NeuroCiencia y hechos sorprendentes que seguro te has ' +
                'preguntado alguna vez. En este canal te explicamos de ' +
                'manera sencilla y divertida como funciona nuestro ' +
                'cerebro, el comportamiento, cuestiones filosóficas ' +
                'y ciencia en general, que aunque no lo creas son parte ' +
                'de tu vida diaria.'
            ],
            [
                'Si tienes una mente curiosa, eres un friki de The Big ' +
                'Bang Theory  o quieres aprender Física y resolver tus ' +
                'dudas sobre esta materia, ¡este es tu canal! '

            ],
            [
                'Es nuestra misión acelerar el aprendizaje de estudiantes de ' +
                'todas las edades.  Con esto en mente, queremos compartir nuestro ' +
                'contenido con todos aquellos que lo puedan encontrar útil. '
            ],
            [
                '¡Explicamos nuestros campos de investigación de forma ' +
                'amena y accesible!'
            ],
            [
                'Un canal de quimica, todo explicado de una forma muy clara, ' +
                'divertida y concisa'
            ],
            [
                'An element of truth - videos about science, education, ' +
                'and anything else I find interesting.'
            ],
            [
                'Simply put: cool physics and other sweet science.'
            ],
            [
                'Welcome to the Domain of Science. A full ' +
                'channel of a lot of things about science and technology'
            ]
        ]
}


function ContentTable() {
    const thStyle = {
        paddingLeft: '6vw',
        paddingRight: '6vw'
    }
    return (
        <div className='table'>
            <Container>
                <Table responsive="sm" hover bordered>
                    <thead class="table_title">
                        <tr>
                            <th>#</th>
                            <th
                                style={thStyle}>
                                Canales</th>
                            <th
                                style={thStyle}>
                                Comunidades</th>
                            <th
                                style={thStyle}>
                                Plataformas</th>
                        </tr>
                    </thead>
                    <tbody class="table_content">
                        <TableRowGenerator
                            id='1'
                            chanel_title='Veritasium en español'
                            description={descriptions_json.description[0]}
                            link='https://www.youtube.com/c/Veritasiumenespa%C3%B1ol/featured'
                        />
                        <TableRowGenerator
                            id='2'
                            chanel_title='En Pocas Palabras ~ Kurzgesagt'
                            description={descriptions_json.description[1]}
                            link='https://www.youtube.com/c/kurzgesagtES'
                        />
                        <TableRowGenerator
                            id='3'
                            chanel_title='QuantumFracture'
                            description={descriptions_json.description[2]}
                            link='https://www.youtube.com/channel/UCbdSYaPD-lr1kW27UJuk8Pw'
                        />
                        <TableRowGenerator
                            id='4'
                            chanel_title='CdeCiencia'
                            description={descriptions_json.description[3]}
                            link='https://www.youtube.com/c/CdeCiencia/featured'
                        />
                        <TableRowGenerator
                            id='5'
                            chanel_title='El Robot de Platón '
                            description={descriptions_json.description[4]}
                            link='https://www.youtube.com/c/ElRobotdePlaton/featured'
                        />
                        <TableRowGenerator
                            id='6'
                            chanel_title='Date Un Vlog'
                            description={descriptions_json.description[5]}
                            link='https://www.youtube.com/c/DateunVlog/featured'
                        />
                        <TableRowGenerator
                            id='7'
                            chanel_title='CuriosaMente'
                            description={descriptions_json.description[6]}
                            link='https://www.youtube.com/curiosamente'
                        />
                        <TableRowGenerator
                            id='8'
                            chanel_title='Antroporama'
                            description={descriptions_json.description[7]}
                            link='https://www.youtube.com/channel/UCGKzjVZGdJ0YmUqg42xfO5w'
                        />
                        <TableRowGenerator
                            id='9'
                            chanel_title='CienciaDeSofa'
                            description={descriptions_json.description[8]}
                            link='https://www.youtube.com/user/CienciaDeSofa/featured'
                        />
                        <TableRowGenerator
                            id='10'
                            chanel_title='La Hiperactina'
                            description={descriptions_json.description[9]}
                            link='https://www.youtube.com/c/Lahiperactina/featured'
                        />
                        <TableRowGenerator
                            id='11'
                            chanel_title='GlóbuloAzul'
                            description={descriptions_json.description[10]}
                            link='https://www.youtube.com/c/Gl%C3%B3buloAzul/featured'
                        />
                        <TableRowGenerator
                            id='12'
                            chanel_title='TeHasPreguntado'
                            description={descriptions_json.description[11]}
                            link='https://www.youtube.com/c/tehaspreguntado/featured'
                        />
                        <TableRowGenerator
                            id='13'
                            chanel_title='Date un Voltio'
                            description={descriptions_json.description[12]}
                            link='https://www.youtube.com/c/DateunVoltio'
                        />
                        <TableRowGenerator
                            id='14'
                            chanel_title='Instituto de Física Teórica IFT'
                            description={descriptions_json.description[13]}
                            link='https://www.youtube.com/c/IFTMadrid/featured'
                        />
                        <TableRowGenerator
                            id='15'
                            chanel_title='KhanAcademyEspañol'
                            description={descriptions_json.description[14]}
                            link='https://www.youtube.com/c/KhanAcademyEspanol/featured'
                        />
                        <TableRowGenerator
                            id='16'
                            chanel_title='Amigos de la Química'
                            description={descriptions_json.description[15]}
                            link='https://www.youtube.com/c/AmigosdelaQu%C3%ADmicaMartaVitores/featured'
                        />
                        <TableRowGenerator
                            id='17'
                            chanel_title='Veritasium'
                            description={descriptions_json.description[16]}
                            link='https://www.youtube.com/channel/UCHnyfMqiRRG1u-2MsSQLbXA'
                        />
                        <TableRowGenerator
                            id='18'
                            chanel_title='minutephysics'
                            description={descriptions_json.description[17]}
                            link='https://www.youtube.com/c/minutephysics/featured'
                        />
                        <TableRowGenerator
                            id='19'
                            chanel_title='DoS - Domain of Science'
                            description={descriptions_json.description[18]}
                            link='https://www.youtube.com/c/DomainofScience/featured'
                        />
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

function TabContentGenerator(props) {
    return (
        <p class="tabbed_content">
            <ListGroup>
                <ListGroup.Item>
                    <p class="tabbed_background">
                        <Container>
                            <span>
                                {props.content_arg}
                            </span>
                        </Container>
                    </p>
                </ListGroup.Item>
            </ListGroup>
        </p>
    )
}

function ContentTabbed() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab
                    eventKey='faq'
                    title=
                    {
                        <span class="tabbed_title">
                            FAQ
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>

                <Tab
                    eventKey="videos"
                    title=
                    {
                        <span class="tabbed_title">
                            Videos Top
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>

                <Tab
                    eventKey="libros"
                    title=
                    {
                        <span class="tabbed_title">
                            Libros
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>

                <Tab
                    eventKey="podcasts"
                    title=
                    {
                        <span class="tabbed_title">
                            Podcasts
                        </span>
                    }
                >
                    <TabContentGenerator
                        content_arg='contenido'
                    />
                </Tab>

            </Tabs>
        </Container>
    )
}

export default Ciencia