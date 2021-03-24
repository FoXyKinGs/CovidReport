import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import { GET_DATA_CORONA } from './action-home'

const Home = () => {

  const dispatch = useDispatch()
  const dataCorona = useSelector((state) => state.corona)

  // const [angka, setAngka] = useState(0)
  // const [mobil, setMobil] = useState(['BMW', 'Toyota'])
  const [Covid, setCovid] = useState([])
  const [indoCovid, setIndoCovid] = useState(null)
  const [country, setCountry] = useState([])
  const setUrl = process.env.REACT_APP_API
  const date = indoCovid === null ? indoCovid :  new Date(indoCovid[indoCovid.length - 1].Date)
  // const tambahAngka = () => {
  //   setAngka(angka + 1)
  // }
  // const kurangAngka = (value) => {
  //   setAngka(angka - value)
  // }
  // const tambahMobil = (namaMobil) => {
  //   setMobil([...mobil, namaMobil])
  // } 
  useEffect(() => {
    axios.get(`${setUrl}/summary`).then((response) => {
      setCovid(response.data.Global)
      setCountry(response.data.Countries)
    }).catch((err) => {
      alert(err)
    })
  }, [])

  useEffect(() => {
    dispatch(GET_DATA_CORONA())
  }, [])

  useEffect(() => {
    axios.get(`${setUrl}/total/country/indonesia`).then((response) => {
      setIndoCovid(response.data)
    }).catch((err) => {
      alert(err)
    })
  }, [])

  // useEffect(() => {
  //   console.log('render')
  // }, [])

  return (
    <div className="container">
      {/* <h1>Home</h1>
      <hr/>
      <h1>{`Angka : ${angka} `}</h1>
      <button onClick={tambahAngka} className="btn btn-success mr-2">Tambah</button>
      <button onClick={() => kurangAngka(1)} className="btn btn-danger">Kurang</button>
      <hr/>
      {JSON.stringify(mobil)}
      <button onClick={() => tambahMobil('Porze')} className="btn btn-primary">Tambah Porze</button>
      <hr/>
      <Card 
        title='Hello World' 
        terimaData={(params1, params2) => alert(params1 + ' ' +params2)}/>
        <hr/>
        <h1>{}</h1> */}
        <div className="row mt-5">
          <div className="col-lg-8 pr-5">
            <h1>STATUS COVID-19 INDONESIA</h1>
            <div className="row p-4">
              <div className="col-lg-12 p-2 pl-5 border border-warning border-5 rounded-pill shadow-lg mb-4">
                <div className="row">
                  <div className="col-lg-7">
                    <br/>
                    <h4>Kasus terkonfirmasi</h4>
                    <h6>Update Tanggal : {indoCovid === null ? ( <div>Loading...</div> ) : moment(date).format('YYYY-MM-DD HH:mm')}</h6>
                    <br/>
                  </div>
                  <div className="col-lg-5">
                    <br/>
                    <h1>{indoCovid === null ? ( <div>Loading...</div> ) : indoCovid[indoCovid.length - 1].Confirmed}<span className="text-danger" style ={{fontSize : 18}}><sup>+{indoCovid === null ? ( <div>Loading...</div> ) : (indoCovid[indoCovid.length - 1].Confirmed - indoCovid[indoCovid.length - 2].Confirmed)}</sup></span></h1>
                    <br/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-2 pl-5 border border-success border-5 rounded-pill shadow mt-4">
                <h4>Sembuh</h4>
                <h2 className="text-success">{indoCovid === null ? ( <div>Loading...</div> ) : indoCovid[indoCovid.length - 1].Recovered}<span className="text-success" style ={{fontSize : 18}}><sup>+{indoCovid === null ? ( <div>Loading...</div> ) : (indoCovid[indoCovid.length - 1].Recovered -  indoCovid[indoCovid.length - 2].Recovered)}</sup></span></h2>
              </div>
              <div className="col-lg-6 p-2 pl-5 border border-danger border-5 rounded-pill shadow mt-4">
                <h4>Meninggal</h4>
                <h2 className="text-danger">{indoCovid === null ? ( <div>Loading...</div> ) : indoCovid[indoCovid.length - 1].Deaths}<span className="text-danger" style ={{fontSize : 18}}><sup>+{indoCovid === null ? ( <div>Loading...</div> ) : (indoCovid[indoCovid.length - 1].Deaths - indoCovid[indoCovid.length - 2].Deaths)}</sup></span></h2>
              </div>
              <div className="col-lg-12 p-2 pl-5 border border-warning border-5 rounded-pill shadow-lg mt-3">
                <h4>Aktif</h4>
                <h2>{indoCovid === null ? ( <div>Loading...</div> ) : indoCovid[indoCovid.length - 1].Active}</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 border border-5 border-danger p-4 shadow">
            <h1>DUNIA</h1>
            <div className="row">
              <div className="col-lg-12 bg-warning mt-3 p-4 rounded-pill text-center text-white shadow">
                <h4>Kasus terkonfirmasi</h4>
                <h2>{dataCorona.list.TotalConfirmed} <span style ={{fontSize : 18}}><sup>+{dataCorona.list.NewConfirmed}</sup></span></h2>
              </div>
              <div className="col-lg-12 bg-danger mt-3 p-4 rounded-pill text-center text-white shadow">
                <h4>Meninggal</h4>
                <h2>{dataCorona.list.TotalDeaths} <span style ={{fontSize : 18}}><sup>+{dataCorona.list.NewDeaths}</sup></span></h2>
              </div>
              <div className="col-lg-12 bg-success mt-3 p-4 rounded-pill text-center text-white shadow">
                <h4>Sembuh</h4>
                <h2>{dataCorona.list.TotalRecovered} <span style ={{fontSize : 18}}><sup>+{dataCorona.list.NewRecovered}</sup></span></h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          {JSON.stringify(dataCorona)}
        </div>
    </div>
  )
}
export default Home