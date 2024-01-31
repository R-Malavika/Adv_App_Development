import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar1 from '../NavBar1';
import Header from './Header'
import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from '../Componenets/SharedState';
import { Footer } from 'antd/es/layout/layout';

const SchemeDetails = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='App1'>
    <NavBar1/>
     <div className="SideMenuAndPageContent">
     <Header/>
     
     <div className="das">
    <div className='nn'style={{ backgroundSize: 'cover', minHeight: '100vh',height:'1000px'}}>
    
      <br/><br/>
      <center><h1 className='homhead'>LOAN SCHEMES</h1></center><br/><br/>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://navi.com/blog/wp-content/uploads/2022/06/Agriculture-Loan-Guide.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of <a>Kisan Credit Card</a> (KCC) saturation drive, titled as Kisan Bhagidari Prathmikta Humaari (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         
        </CardActions>
      </Card>

      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="data:image/jpeg;base64,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"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘Kisan Bhagidari Prathmikta Campaign’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBSVuVur8sbWwyCaHadMLWj4Qcmx2XrCqjA&usqp=CAU"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQUExYTFBQXFhYWFhYYFhkYGBkXGBkWFhcXGBgZFhgZHiojGRsoHhkWIzMjKCstMDAwGSE2OzYvOyovMC0BCwsLDw4PGxERGy8oIicvMS80Ly8xLy8xLzE0Ly8tMS8vLy8vLy8wLy8vLS8vLy8xLy8vMS8vLy8xLy8xLy8vL//AABEIANUA7AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA9EAACAQQBAwMCAwYFAQgDAAABAhEAAxIhMQQiQQUTUTJhBnGRFCNCgaGxB1JiwdEVM0NygpLh8PEkU4P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QALxEAAgIBAwEGBQQDAQAAAAAAAAECESEDEjFBBBNRcYHwIjJhkbGhweHxQlLRFP/aAAwDAQACEQMRAD8A9Dttqrkb7UGBuiUT4rukebFsJW5T+7VaWWp/2dv/AIangp8RMvUwZqn2TVgQ0HQVZZnTZ1S0/FMCa1B3BAuU2QqgzUcTWoG5hIIpZUOAalFCg7i73DUgf1qgH7U1DaHcEq1TS7QgNSW4aG0KmGe5UpmhFumiLZ+9BqiilZbBFMB5pg33qQI+aAxOpxURHzUqBitrY5qJb7VMmohvsaJiLf0qM+KmTVd2ihWVkjxUDzUiKYCmQjIlqaalFKKIAHL7Uv5VcGX5Jq1h9qO4ntsqtsatFVz9qdTQYUWlqjBp1WnJpbHojj8mlFTipL9hWs1EMKfCrkT5p2t1rDtKQlMR9qvwpitaw7Qc2zTe196IwqONawbSkLSj7VdhTVrNtIqtXhdVXUwKDY6RKKcJTgVKKFhocW6mVFRFOaFjUQx+8VIipATTxWs1FYGqpdRRECoXBRTFaBp+KU0z81GacQkTTTUaVYAOrCrgaAzipLdb4otElINw1zVWNVe4afOaAbRetyrFah0NXCKDGVlg3VqrVQPxVq/c0GURYFNPiaYH4qRalsahghpY1JWp61hogVpsKskVKa1mop9qom1V0mokVrNRX7VTwpy1L3a1moniKlAqrM1LOgEsFRYUvcpF6xhBaYmkWpZVjDBalAqIamZaJiNxKra18VYT80po2CkU+0fim9urhzSIPzRtg2oxcTS9s1aBUwKazn2gyp96mturgBTmtuDtIKKsSacEU4albGSJBqsWqy1SLUBy9LkVL3KHU1MUBk2Xe5UlNUipqawUy2mNOrVOKwSuag1EY1EpWMDE02VXm1TexRwCmU5U4ap+1Swo4BkiDSmnxp8aBsiV6lnTBaWNbAcj+4aRc02NPjWoIxNNUsaWNYBCo7q3CljWNRmYUop4p6NibSJqM1OnCz4mgCiuacGrDaPwf0NQK1jUOKeoinmsYmtTU1WDTg1gl4apA1QDRdmz5P6f81mMrY9tSeBV62/vSp5oDUPiPvSKVj3fxDaXrE6Mn949trgM6BB7U/8AEVDt+S/cVs0qafBk0yMGkGqVJlmiMNFMVqMxT51jDEVGacmmoiipRSBp6xhRSilTxWMNFKKVPWMKKVKlWMZsUgk8Va1oiiOntwJ8n+1CzUQtdGPOz/T/AN6vxoLqOpue77VtU1bDkuzD6mZQAFH+k1Ser6j3fawsz7ec5XIjLGIx+9JvNg0oqL2weRQvo/UOyslwg3bTYORwxhWVwIEBlZTHgyPFE9N1C3AWQyAzrMEdyMUbn4YET9qKlYeQS/00bGx/aqca1ooO9Zg/Y8U6kI4g0U4FW4VJbc0bBtJ9JZ/iP8v+aLinCxqnilbHUaI0g0/rH86lXjv4z9Y6jovU7z2XK+4Ldwqd23/dqksnB2hEiDrmpz1FFWwTkoq2c16t6nc/b7l+T7i9SzD/APncxVfyhQtfQpYDnW/7nQrxJ7Vu5c/6qVjp5927bBE/tSso9gfZ3KvlH0lpq/8ADvrvUdd6n05uuSq3GcW11bQIjGQvkzHcZO65tOexu+rwc+nPa6fV+2e0CnqWFLCu2zrKriyPvQ80cFqJtiayYrQIDUporClhR3G2g6KTV6oBUwtPFK2NRGlWD+MvxGvRdObpXJiwRFmAXIJ2fAABP8q5n8Ef4h3Oqvjp71lQXDFGt5QMRJDhifHkH+VTepFPa3kRzipbXyehFJqs26JpiKpY9A4WljV0UsaNgozlWT/Oi4rmPTf2gMoZ9FjMmZkHzHM1tn3Pkf2/sK4NHtkdSNpNFXCupm+pes2Om6ib95LQeyoUuYyK3HmPykfrWV0P4v6d+suTdte2tpUtMrZe5kVZtDyGkRWB6t1jdRcGDF/bdka6zBFbSsxsrbGeElAvdBkknYJxeo6Zg6Myd4YNbKfvSCpyXG8yD95wQlzJX0BjIqj1H0OWU3eDv+g9eA6qLzIhuoRMlU7HLWhNwKc8WuKTEHFfmBq/hS4WsFoj9/1X6ftN2D/vXB/i/wDECdR0Si7bVrim3cENCMpc281hg+LAhgCP4hOxXOehvcSHSbCwG7LvUA4HhiA+KKfBcgHxNBam2XiDvKlXJ7vVfUL2/l/9Vifh31RntorB2bEy7QwLAmVdlJxcCNNE+JrU6u82DRjMGN+fFVetFK2dCVoioq7p13WSOsu/5U/9VF9D1bliCqDR4aTMipR7bpydJh7to1aeKoF1vgfrT+83wP1qvfRNtLsa8f8A8SOstXeqexeAtXLJUWbwBKMjor+3fUbUZEw6zHxzXrXvt8L+teRf4q+m5Xj1VshgoW11AUybVwCULjlQysuzrQ+RU9We6OMkNdNQwZS/h/q/2ZrIsuS3VWrgiDbZPYujMXJww47pjitD8A9Za6fqrdq3F69dcW3u79q3b2zLZ83GOO30vESBvPsev3B6Vc6bIx+0JbG9iy6NcZPyyQiPhiKN/wAMPTP/AMhOquELbRilosY92+4KBU/zQC0xxr4MRTW6Nf0c0a3Ro9tilFD/ALQfgfrS/aD8L+tdfex8Tv2sJpmof9oPwP1qjq+tZVkKsyBtooPWglbYdrDwacVh/wDVLs8W/wD1UT0fW3GkMF1HB/Okj2rSk6TNsaNWlQovn7UjfP2qveR8TUZP4q/DFrrLbK+nxi2/1G2ZmVUmN8GIJGprxHoutboOrdkwd7L3LYdlYqIJtu4QEE6DACfNe9XvVURWuO6KiGHbIQrCO0/6tjXOxXhH4huB/aUIRdHvG4vLk3bty/3KB2Y5HROUSSFjfPr1iUeUcnaIpVJcnsf4Z9Zuveu9Pfa27olu6lyypFtrVwaDAlsHBHBOwwI8109cF/hR1c9AAqqClx0JAALRiwZvkwwE/YV2I6hvgVWOoqVs6IfFFMLNKsvrutuKBiFkk/0ihP8Aqd/4X+lLLtWnF02U2tmIvWsCG3oz+m4ra9QdmsXPb7ma0+AmJLIcdjYmRuuY9uNllPiZM6PjyDG4Na3o/XR+6Yj/AEmYnfG/vJ/ka+d7HquEtsnyVkrRg/hS5ZX2DcBAFlFtm4AQrrivdAgNOQD8bbjMZDfiR7Z9w2FO3s+37Zwm4XQF7SiNdxMcNLnWeR2ut/Cq5l+nufs+bZ3UCK6uxncNtJ84+J45q/0j8NC263rt037qZ4MQEtp7kZYWwTGgBsnj5M16+5HLslW2vUyes/C6tZulrjm3aLLiAYdbN43iFGeIE5W5xmFmfFC9D6Wv7S1p3U4XsAxXZOC3cwpBAdm0pmAoQD6YPfFzWN6z+Hxdf3Vc23IVW7fcR1U6m2SAGjQfn86CmGWl1Rj9JbHT9ai2mEPd9lwsqrK1prm1Xs9xCp3EkAif4a6n1S9CR/mP9BH+8Vk+l+jJ07G/duB3VSAQot20DEk4JJ2RCySSY+5qPV9TmxZjGhiN/SDuPk72R5/rx9t11GG3qy2lptcky4PB+fM/bX9aI9NuRcH3Efrx+exWa7iQWMKPJI/kAPJjwY48VFL5YwsEjeRMrkOIjnj+3FeRpy2yUl0dnRttHXTTZf8AFD2XyUNonyPgjRH3irHMb8/f+te+pJq0Rose5E64/wB68h/xCuXLHqDXrbFPct22Vh/EuItsrA6cSm1Mg/FetXdLOjOzvxAOq8s/HHqStffpr6yiYtauoB7tr3LaFgV4uWyf4ZB1o6FOjm7Ul3fqSsXOiPp7dSbC5rdVWshmFpuoCsEIWdWyrlyoMaIis78F3bvUeo2Hclvbzf4VEVGEW1GkWSoCgeast/ha+elYK9k2jdS/73uRaFpbV1S7SMhEgY4zJq/8F+pJb6m10/TiRdcC9fuCHuIgZ8Laf90mvJLGdwYhnfVnLnfG8cep6x7n/wA3/WOKfL8/71UR+v32PiQ3IpigniD9/P5MP96menRflWb61fgKPzY8zA1oeeTRnjyP/Fr+U1y/qPXZuzwQo2raZYUmNiRvZmNVy9smlp7fEaELYT74mJ8+J+KM9L6gC4PhtTuJ5AmsOz1ini4hHJkwdcAFYjnkjzRDKcZnniIOwRBGvsP04ry9N7JqXVFXDozrshXPfj251A6U/socuXUP7c+4LcNljGxsKNbg1p9B1Gaw05jTiCBJEyJ8f2M1m9T6Fce410dX1Cd04KLRURGtrJHavPxXuwmpLcjl1ItppHDfh38P9Tb6fqb1xQiixduWlefdW9g0XUHNpsQy5GGPj5rqP8N/SrA6RLwQe5eFxbjkZMQHdSo/yrA4HPma1bHoTDLPqLtxTZNoowQKAVxzhBtonmRuiPQPSU6WwlhHZ1UtDPAbuYsR2/cmn3MjDRpryOY/w0f9nbqehuau2rpuAHhkxVJX54RvycV3hasL1H0BH6m11YuPbu2u04hYuLvteedMwn4P2FaHWdYLag9pJHauX1H4/KlnNRVt4K6cHFbfsC+r35cLP0jf89/2igfe+4oR73cZbHIgnYnJpPHz+RmPyqgdVbWVyuiDwPcgflAivCm3Obn4nUoYAbyqGNv2/rOxjLDXLB4BXUzseasNxo4VgYnJR3YnQJBM+fBj5odz2s9uWIMYLGJI/wA5DSrATwf+DPpesVsSfrgZKBBU+NAncCdTBqsk6x/Il4N70r1N0Ue5kykiCYDL/pJ1I45AOxWta9RtNpbiz8GQZ1/m/MVyV29BEOoUeZkP8GAd/P8AON6qk9SDpZ1wBOOIHDTMeZGon53Vodp1IfU2y8nb/tacZDI+Mh450Duhep9XRZX6j8KDH68fnXNXLv0hnxAkbI7iYgqEEMfETSOOyhaWMcAzr4Xx9t/puml2ubjhL8jKCD+p6q5eIBhF0FTR0fsRJP8AzQN64gPbLkng92wPBP5flqiLlvIDLLRMCJJIBGh/cmOfPNBP1SLbEDJp+luQBADCYMaJG43HiuJuUnbdv3yPF9EEJYZpzJxg8HiNk6+nUn+VI3IGFofJOJMmZ5nf8z+tCJauMIXQ22ILnwDMRxutEIUQMCT9OUFQxA5yBEgcwDzEeaFe+gzdfX6B/pPUCyYYk5ROyY57gvPGjE+K3BshgQRyPg/z81xne9zTCAMuQTMcaIEeSNVqdP6s1sKjKSkSQD3ARMrPIPO9R5rr7N2hx+CfHj4E5wbeOTevMDMnUamuB/xJ/DLvj1NlS5VcbygS2KklXAHIEkH7AfBrsbXULcPaZjZGww+MlOxyPFaSEx/KY43/AHr021Srghq6SnHazw216mw9OuWcu09Sn5YFHuEflmin9a6b/Dj8MXMj1dxSihSLIbtLFtF4PC4yAfOR8Dfav6ZZLl/Ytli4Ykov1gEBvuwBO+a1bURs88/80Xijnh2bbJSk7orsvqD/AFphrtPcD+RH/wB8/pQ3UMLYLE4gckmFA+xNZ931xG/d2ye4hcicTMTKzsed/wBJip6mpGCt/wAnYot8BnqN4qrKgJgEsupIH8KFtbnf/vXMjqEgwjWirqWPCmfBPAbakeN/ereo6dlY3EOQVREwziYDAZDJxsmZ5PBmKbpvUFuobbN9KkMdiYIiTuDxoa5/l5OrPvHuZaKSV8kb9gneFu6DOJxxY+WAYD6tmCD81FugCsxF1gmiF4An4LaIH25Iqu/eudOQUeUbY/i34DCTvR2AOedUT79m9Jko3hTky5fcMTJGgDrjU0mawPTr6Er/AFhU5ANCjte2TlGvrOMRxJOtxWt0P4kt3Iy0wG9Sp/IiYI/Pmsm+biGSwBI1MqOBrfyedkeKzur6VXByRbcwc1HaSNSdcbOgAZHmqaOrKCwLsjJZO6W+jQyOCBziwI5/UflSfqrX/wC1QRyMwDP3Hg+K4bpvTWkpbvAb7QsgsdRlxO4HnmoP6jdRit1AxSZlRwTBgxB19q6f/XJ5SQvc3wzq+p9dUFkXJ2A3lbPtrEGTEEiJ4/3rJfrDkWVgxIH0sFPP+Vu3QPFB2uutsCVuNbcmYJJROdYiNbOxxP2NMOmVgXKC5yHZGhiTvLFBE73A/PmTz6mtPU+Z19BlBRDLdozmpceSCFbkS0ACU/UCf6T9w2+33G+duEO/9M6rNvdKApa29xGmMWEAlfqB8qpyEHc781D/AKhd82y3wYB1+eJ+/wD82ZuLYdrfBlqhTuxJx0xyBUbZZWIL7+YjiDRC3TMrb4EFhrGRxP2H84HiKh0dtcZFxC+1CESUYztvDAQPpOO2nVXi6QFt3AQQzZK6kHtLjJToKhUKJhpnxMjqrJyd4rxkXVthbzAF0FRiA2LjXdoHcMcTMfV81X1bAqJQrlo4khpQCFIIkA77thoGzNVdP11xDF27DC7kMv3XayHtJkDRXR1yJJ1Ry9O5QiSVxWFYBdjEiGbzixgmAYGt0JfCU3OOZAr9UVUKDkJEAk/VDKOBPzx53Hkl2rDhc8iGEdqlcliC0kxBP23zRXSBEIYKgfmAFLZBQCoZjAbgz5381n9ZdY5lEdAhyf6PnRGyACGkcT/SpKW7geM92EEu5VyLZAJBESApOmgSdAD7zsc+Kujd2IusGIxhYBJOMSvcZVTo/wCwrPssxK5IGAVihBUThrLiFUAk71J0K0urui0JfE21AKtaJgs3ZwTIgnc/76z06xXJpS2/CjRXqoH5gswkkwCQQfiDGz5YEULf64K0FoMEDIANAGsn0W3zE/nVHUX1dy69pOIhiFJkRCZ+GIUwfkih1dXuMpt/SVVQAxBjbghhhAEGQJP85K92lgKSirZuelnsRFAAM4hhj3jncQrnkkajwaZ+uA2yERwVA/nIIEDfJjmJ3UXtLzlh55kwYAA0dnzsaEgmhbjuhaO+TPaTJDcxyW8Hc+DPMI1eWaOclzSzSABB7T5EnR7JgGYBieePOr0/XX1AAKt2j6gWOUDlokr/AKjBrkehv8sbjAqWXGRERPJ/T+XzXR9Dea8rMO0EESBtgkA+RuImmTnDETTxgHu/ipw7ArbkTyHBBgwInYn/AG/kV0P4hJJBZZgGAODx9Unf2if51zfqZKMQpZshLCMvpOjsA/ePvzUOgLo05Q2tZaC8Mbnmcf4fidarolqako8lXpxccHW9dZ91CxYsVnHQYjGC2zomZiNieK5LPE4le1sRsT2mDOJ/X8jW96dcBY4OGkliMhGuQoiToRO+TTeqenO7L7bLg51HiR5+CZgxPwa59zWZfcWEqwyfR+rBcEVLgLLAkiYP+XGCANRyYkUP6jaYXPcUE5GWKzigEKRAAg+dzyfyqq+EsgKCpIBkTGUbJYgaO538aor0vr1uLhbLDtbtKqpEEcMdE8c78ULbVpYB8vxRI9J17IQrpAae0qCR2jH7EbOtnXG9I+ho5/dNtiGFoREwWIEgfyDDQI5mhvXLbrNyP3ZADKoIYFpJDJ/GdtuPLfnQnTde5IZSytr2iP4mUSSwA7RsDnwZqkbaGV1uiatrqr1om3ctm4pAks2R3JA+nZG+AasazadiVyG9KOFO5lSAyz99CNVRduPeQIwLZAPAcqVkEDGNXEjmPAj4oG/0F60qsBxkCLWWQVYxOQgmTP8A70ko26vIMPrTCm9PZfp/eSxAxnPJtxvQ48R8TUl61jkHAZZUMAdDLmToZTkIG9VV6d62FWYGIBLTkcjKmVaTjuOR4p71pXZns39hARbYlW2cgAZHaQQJ3sbrd23yZp9fuVdZ6dbYh7RwyIUq2sYiTPx5IE6NRe1ftSwK9o7sTI00YiPHBJj554qhLtwMVuEIAQGDKCyyIAxj6SY38fNEp1d20ytiDbM9gOx29xNxjoiIIMjfnmmp8NoZtrHJZ0nrLMQrKXMyJCgsCSccdKdePiPtSteqJv8AdeTHGx87/wBtUN1v7O7ZlnRyRoHKACMQo52J0B5oXqvwxDETl9+3/Z4o7YvltAW3yOe9NZ7XuZm5cOGVtjBDOBpbwnaGQ0xMpJkGDpdP6e7nL28gNrbLYo5IYFlflDDE4n+GfjdXTdA3vdl1rQAAeGQk5R2KD3ZeOPkAVr9RdTp7QRS15fcydnZSVUEmDiO5yBpW0ZP1bFehOTnSVe/fQ4rUXUSnr7lxEFm0QzsQpcRiiFSS4ZhML4I3udmn/wCptbslWazc0EIJK3WAOJugXFJI8xG6zuivkyozvE6cBVFyI+oT2sIOMfHBGIqfSQzFCGCrcXtIBILELJUnL/LImOTqpShFYrjIVBXb6Eeh6goWJCNafg6R1IOK+3AMR7hOI4PwK6Kx0j2++VY3CcMpydgI7xoE9wlZM7H5YvS+jdl1biC88HBSUt5KBosGP7v7tOj2j5Gx0th3xXB7agmWIQ4rEMUWYXPR3iBkJk0mrTqms+X3BPU/1J9P00Zgu8tsAqCqeSoUDJh5A/l8VlPGJ1KuSRoqCI2MT9XIPj71Lq76vY9y27MPcCEMqkhVMi4GUyoLQcTMEHxVNjrvcdkuiX5BuGCxJCgwRBaWfRP66pNklbeff5KaSaW6QLf6zFQgkQkqoEsMZLKT87O28QOOOg9NuWUgYj3u9STlLIB/CAxxYkFjxudaFAdJbVFBtoxYsmblSWOiVJYngNI1wCSdCthbodWQqqLBl1xK4zELHJnIEcAOd7rSn0S8/EMtTc6M3OFJB7AFxDTkEnt9wnZMQSeZb86XUdYqqcgZYDQbk7xg8kc63xRIVLkutxZgAiB2woEb7o4GwefvVHU+1aQZNi+QKAeZHZEzA1PIjGpbk3xktvjVC9I9IE53Cqqcj7ZMsFiO74cb8GPHEVqXujSS9rtugkiCy+Z2Q0HL4j5rP6XpndwyAWVDhyv1XLkGBtjAXganRnzNXhXQGQHWcS6Nj+8Og+Ey6aI4kwT/ABVnucr3ehNybfPoZVy5BJDrkDvIwupJAntK+IOjr70L6l3nNXykAsQFALk7xUDiB/Wj/U2NzahFIlXUvCOW4aD9I0SY0DBjdDWyQ6+yUJAGQQyBIGQj42VK/adaNVWMo6FIP9IfvwLOS0aEKFJgBnO/t8kTXQ3VcoAJJgOJXUksC6R5nf8A5xzXK271tcg7QCQWIYMpJmSHnZkyBOiNTAjX9L9XtEKGuKqOpKBDyqMS1sA7XYmPlYqUou+CGo3dpA3qfQMWAYkXRttBQeGkiB39y71oCd8Q6bMuAjSeLpBJhWgnHXcxECeRG/Bor1/FMXQ3e4ggq7AuqysQ3ABk5Df1eIrGvdbmC0hVk9iyoW4YyPbGRIn4gj5iW2t4RSLbR0Y6sAHN89jLhQE0Pp2HHdvnncUN1noQLNct3MA4YouAeNbPcZUz48SfyrO6LqgWVmCqARwQWBbXdjCbka/nvdanR+oNKLorruI72gwxC8zOXP8ASpbXBOufQSVw4Mi71hW44JbBjmAQcz4TAkcwBAHzqtLo/Urglbi3LWvpMMQGldnwOdz9qK67o7fUWwSY2MSIGIP3iCPy8xqsTrOhTp7WV13OTFZklWiTKxrYg88KTHIp4xjNcZApRl5hl30ZHPuWoBKQLWLKB24s2tAbDARseazltJb1eDu6MZKwIAPaUid+MfPzvRfTdUBbBV7ltg3F394EECS38SgfHIEHYFAepNdYNtpCSbYbIkSDlkoh1K9wk8HmOaxjN+X6lIOXDZo3PWbZKkKM5ARnA9xtcTMFzxsTWq9q9DBba3ARDIWAzMkEFgZBgKRxOtyIrhV6wnZS3n/CzYkrrYhgSQdbA5HnVaA9WAuKxaQ6ryAwJ0AMEG2kTvz990/dRWabfmCUfAttdSD3LbKliTNtTw5nsPJXgc7InyatHqN8ybPTs6mJOIPcAAfGuAY+9EdF62S7B7gtKv1FHVcTBPJGx84xs1dc9KtZE3LxLEzJaZEAAyBB0OaSv9kBz8UcpZ/GVknEiAuYClWzW25IxzQTpW3/AOHmYNX3rtm0EZVGJZTKzbZXYKitjAhQJg/80H1HQ9IoBbsY3EVlLAZAZAkCCpJhSWnLuNXH0yAASpMOVDFnBKgoSoCk4kMGE8CRPE97jpppRte+hyRhGPLyGNm4LFvbRYgqCOFM2wsMHOgRI8nfNafR9OuFly6XrHcC7Bhch95FW71YIXnf8GpoTo3Fqyy3beDWmBaCWzJ4tWwdtiMCWECJGyKMa77otNl7jd62gGPZc/iDhe1jDT9pkea55OsV7ohqalukGWrGDBjcUXGyBuhiFcFhErEx5gwTzNBW+v0/vulp1VlUY/umXTg8ifpJgbhV+IqvrVuW1OgRexKPcGTI1sy4XcC4vdogyFj86GwuLNt1IJgW27FVQiy0OARBta+Pcg/Vqajm3/X9jaaTVsutv3h7d5GDKA7EhIUBIurCmfyHjneqNPotoj3GY2vc7btsc/UWS7bJ3bGHuOdk9niSKwl65rYOaLbtAnF2dSZLLpDiQFKtM/I+ADVfpP4mAW5dthcslUqFa5cuHIzBDZfQFhhEG4wgxVY6UqwvX8FJTd/CdZeW5YRGt23u21GClduzkEIVhtW2YCCeefNZXvWve9se52KbStiFSVZ2e4pjsks4AEAhVjUUf0vWXWtD3LaW4CsjIxuK7sXCI+ak5q2TkgxKAkCodPasOMVHthO4DRyMYn5kAqPzJaozrTi14hhJLkpCPelZKdr4suI1EhvMyREDWyY3FZv4lvD3QASFYKFbIM9ySCMAPHgmPAAkCi/Uv3CM+dwziqBCEDNLRM8eW1uJmsFboNz9pwRiCFmQyKqiAgttuTsydb8cA6Mb+Pp0LxdytGr0K3SR3jGLhOBLyiIx5GlHAI5k+KNa9daU2pGDgg8qR3DE8pJSCJ5BOwapt+pANcfG77bo8j2iexnRA4CGWWGaQAfG9EVbY6qxc91luFSHRSr5YOTrKwWAjgSCBsNqjKF52htb8oE6jq7YNtXM9xnNcFYExgW+8RkPMfIon1zqi6DADJRiI0I/iJHyO0R4zg1TdUcYh0DQwP0jzzuBEng/cRNYd5l90oFcgCJJ8AEnvPPg61r7UVBSXkVaTyHWrYZ1aGyAxI0eBAYDiICiIjkTW7YtCAl7GQSQcUIBeQWYkTETM/P5VzNnqf4sw2RGXvAx9Ggo07GQYmNlfzopMbvMs09x71WI+gxs+RJ3B58jTg2aVtYOu6ZF9q5bQqwtyBlMFZaAJkgRPnkDcVzHqaGzcYbKmfMZKC0ifsPiePtRPofqpt3MbeQRCMkYEkiRpHIk8GJ1Jj71t+vjFgQilwSAQMiMpZX50GLAzE7J3UanF5V++pNNxdM5Bb+J0siQCOTMTGJ3uDvxWxYvOYvMro3cihUDYoIGTyIUSDGMMABsboFEa8h9t0UAtlKFMbrEsDiv/dsHdgxjawYkVX1fqFlltrbDHFAhh3C9nIUcNuWDQTtp5FW2/QZu8HQLfL53HlSjqrdxUoxTPMyNqR5EeROiaM9Sth7RMiJZGIbKSvejYGSwxaTH5eTXIWutU6ctbHKsAIkEAtryBoE8TwK2fSbOb4t7nte2WQnH6lgMGAKkEriREyJMDVTlpLlfq/wRlBxyYV3025YuZO5uXGXJ4iMjpMZ20ATkOABWsrIYh3XYx4DoxkMBj2uk7KcGRpTs2+temM7KRjDNiYXAwcR3QYzAmeDA8xQQLWQ6MWCjNBKAkrBGoiZGPgH7yKrvvKeffQrGakuclnqPp3uAsVxuYStwSbbAalwBkp4kRqCYEViz7Rwa0pbYJKysgcgzB518iPia1LXWXrNx3/dogaSgdgTlpFtkgQw7SDyJiCBB2bz2uoBZmfBmXgDO2+9Muo1GhPEimzFXWPwHc1hnFv0jOQy+RowPMSCNkGW14MUDJTQuXfvh9Mz4+NRqui6/orll0W5LKZACgGGUkAsSYWcctE8yCeDnMqZNCMIaDlcQEmBJgkGP1/M1WErQ24Cv33Noq622YEAOO1oQam5wGJJ0wEwBOzRlm8LWLk3SjDPsuBHuBCMYPKd4gN9mj+KKOg6BmIuOPc0DatswVX0cblxtN7ZxjH6rhHgbNXrH4duXJu3LzM7HvyUFVnFQpCxiV3oDtC4garqexUpNJnBNqWE8+h0jevW3BF+6Wu+3M5YuTbMggrySADj5BJ3xVnS9IvvfuBbzeWZQxKkrbAuLb4QsVJkwCRJiZFcr0AsB1f2LqeyyEjItmoIUtk5xUK5Bx3mLniuh/FF0IbHse4qLat+ydkLgzQHPI7swQTrY8mueWkk6TeffQ546bcqLr/qV24gZrV1itye4KCbGOTKVRv4GEKyjav8AIJOV13Ue1kVIutxbUHM5ZAqoLQygbkfIg7FNY9TFw5KRbCqxYKSxDtwwZtzzs/l5rEt9A9w3CjB2R0T6SW/eES/b/CI2APB/mYwTb3KuPbOtfBGnhF3pnuK5923ca6qwiMGwJlvGMKROpES01p2V7HCslvt7hb1ksB0LOmoIWFf6spiK07IQoqSZgsrWwTbcsq5GCSScVHaTMNxqKp9O9KNu4eoa8LwtAM1sEKpCxhIHKi4ACN8Gh3ik84Ehqw4NN7ty0iWVdi9oTdzBuEXbwYlSSZbFSB57lPyaewqXzncQI1oEt3naqS0ICNEksvG5WTWdfc2zLmC65kMd/USWy4IkkzvxsRUOh6pc+/vWWB0VYA7CyIIJZQBzwI5qU4KT3LB0qC5RD1n1p0smzPuWxlb9zBgDkqkDL5A3l/r/ANOsz0XqbcnKSEDfSgZQAoQKJgEkFtnQIX70vxjj7jWhcaAY9tgTiV+gPA7vqYiPBB1NT9E9ORwgdtNJZVItvjb3IIEd2gVH+UkxjV1CMdPOLCmoo6XpesQWLrC2SVSypyHaxuXmacV7gQbbEzoACDG6o6nqFNlbj9OR7gXAZzbYElkkt2qDJUAwd8mdaHSenW7QuIMGyazAfIKvtreiXWfbkuCJn6mG/JVzqrmBVrZjBRmwUB1YbxWNKGH2g+BquaepG0l+ffUmtROVIw/SrmAxC4iO9UnUtPap4k5D7+fuP61ZC23KGO/NXgi4DGMKD/BiZgclj9MUF1y38wEg3CQtvEBQ09sNl2ye3/zIPmi+mtG4gS8cLjBpyAJDosjMQcgWG42NxFUS2tSsuY/R+oESzSAsAEheZ3kSJYHyDvkcGtJOqVWzffAAVoBJGNoW1A4hjBnzqCSTldb0+EF2HaCqBZAAMQRH1Zf7D5q+x1NlIyUi4BAcKXY9ymIPbbIgjQ4MyDVJRUspfYEuDp+k9YuuG9qzFvQXFVl2Ud4E97vMr8du90Zeu9Q6k+y0pCsDDh0CaZGXTQZU/kJ5rkeo/E5FoGQxVhgLsMOO7YjNQ4LYQQMh4ArV/Cf4i9wF7qtbZVuP7gMhhIS5isg+5BkxH0zBBaoT0JVv2r9znlae6i+70hYl9qjhgbUACSplxwcGlJ8D76jmbt0iRg8ziRB1GvsB+ehXbdZ6haxX3HxRWD5QqZyjIFXH5xHj+JPigL/UWr4ZHtpthg0s7AaOJKRnMz/MGhpz6tFoal9DnLN4Iva0gcEjXA+hf4Y3vzvxFVWetvhy+ToJHakGYJMQxgASd/3ip+q+jPZeRLrMm4MY75KhZUSdfBiOaEZwWHDEbGl+mANRv+n9zXUoxeVTse0zsfROsuP2M6hYLWS2IdgZzzAJmIkkf5QST3UYlnK3csu5e5OlxVArK0riZiSo5PhvzrzHr+pa26Nbb22XuldEMCYZvk8/18Gu79K9YS8Cb1gC2yqjJbVl9lsD3MwJ7GG4I8xz9UdbsrXxxaz+leBzzjsdoA9S9MW4WFy88kQxWGXccmJxkYx4+1Bq9yzc/dsxUJsMuSsCTrmSsidGR4INdd0fsvet427K4x7TmClxQ0tBH8Xhp3xMwDQ/rNy3bDYAXk954YgsAuZJGQlVH0gE62N7oaetLCGhrRlgh0pDqoe0HX2yxF1+9LfIIvH/ALS1Oxc5UmDjNX3vwqrHJOoKqYMXF3sTo+V+DXKdd6mFue4jlJKsEUkqOR2kaUgk6Ov4To0RY6/pYlwysSSfa9p0aT9YF5wbZPJQdoMxzAt3O5WsefBpWng3+p6hgvvNiWIzbFcQzW2VSY3BIHPggcjRu9Cse8rMMVNssFDL7i9ilhKkgRttfefFKlXD/j6/ueXH50c11NgXD+8hibkLChQsxwoEY6Xt+3xqqbGaXQqvq4uJBE/5ZiT9JMHH/mlSr0It5PVSQul9v3u+3mCiQMioGTRuPq2F58CNc1o+rXfYF10RCLblRkCSSLeTS0xgf8seBvkFUqnLM439Dj1/na8gXofVmsN7mIYJbLqi9iy6hyDEk7xj8vPjaTqQLhS0vtibzJGJKPaS2VYEr3f9s0hpmBM0qVBpc/R/gWAH0lwu5yCQzHMKirJZTJtx/wBmCYkbkKBVVvsGawIx8bCsSCoPxo8g8/alSpG8/Y9CPDMXHD3HhXC4EK6g+DckERDTIn4JEboH1b1BumuMLYHfDfAG2UiBzP8AvFKlXdppSkr8P+CSdGl6L1z3LL9Szt+6uBbaTpQdjceGYH+X8x3HpN1eo6O71QU28f8Au8skOeBI4Hb38fYflSpVy9p047uPdHMvn+xzXrpYvOURGQgQ+u0kcAiTvzO6530TrmNpyJGLgKCS0Tyd+ef1p6VU01ek/T8nbxR1vqVkDp7RJYg3AgEwBJYEnXd9IIB4rlLYWMwDocFp+uRAJGvP5zSpUml8vqFdQC3aFxwW/wAoePAXwgHgcb8xV7epC3dK+2CqHEAHHbTuY1AkQPk0qVdlJun4CS+Vmt+IgqBHZRcmyjENwfbN2zGuFOAaBEEn5rU6roW9kOrgY20gY6xYAgGCJIKnu5IMeKVKuXUwl5/8NHgN6C579sC4AfHnWmbW9bn9a5P1jpAp7WYd7q2zLRBG/GjB8n5pUqXQ+ZjmbfdQjSitrMciNDQjxz+tBv69cAhe1JkoCQpJhWJ87CgGlSr0dOKayR1D0S31dtLPT31tT7uSFHcsAHIDEEAEGe4REH+UdH6X1ZwCIMAbjIYLeLqgGCfAJ1xvcjVPSrxtTHHj+5yLk4r8S9KLZU4ocLVm4ThizB+7AkHQEwCBVHRfhlb6BybaRKwLQ2FOie7Zj+1NSro7yShhnaz/2Q=="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

    <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://tamilorganicfarming.files.wordpress.com/2020/05/n01539083451agri-loan-3.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of the seed subject to a maximum of Rs.1200/-per Quintal whichever is less
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://sharadbank.com/images/agri-loan.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmWrSz-dRMyrUEN7QESxZYch0LHnnXQYa9Q&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50 farmers / Agricultural labourers will be trained in a cluster with the financial assistance of Rs.5000/- per training.
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6847"size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00AD83', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)',boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRhgUFiNDdBEftKV3sQ9Vo10felj1k2F7ig&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}
export default SchemeDetails;