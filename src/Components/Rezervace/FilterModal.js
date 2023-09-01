import React, { useState } from 'react';
import { Checkbox, Modal, Text, Title, Slider, Input, RangeSlider, Button } from '@mantine/core';
import { Bar } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { parseTime } from './helpers'
import { useForm } from '@mantine/form';
export default function FilterModal({opened, setFilteredOffers, setOpened, data}){

  

    const numericPrices = data
    .map(item => item.price.replace(" ", '') * 1)
    .filter(price => !isNaN(price));

const minPrice = Math.min(...numericPrices);
const maxPrice = Math.max(...numericPrices);

const binCount = 10;
const binSize = (maxPrice - minPrice) / binCount;
const histogramBins = Array(binCount).fill(0);

numericPrices.forEach(price => {
    const binIndex = Math.min(Math.floor((price - minPrice) / binSize), binCount - 1);
    histogramBins[binIndex]++;
});



// Create scales
const xScale = scaleLinear({
    domain: [0, histogramBins.length],
    range: [0, 280], // slightly reduce to adjust gaps between bars
});

const yScale = scaleLinear({
    domain: [0, Math.max(...histogramBins)],
    range: [100, 0],
});

const handleSliderChange = newValue => {
    setPriceRange(newValue);
};

const handleInputChange = (index, event) => {
    const value = parseInt(event.target.value, 10) || 0;
    const newRange = priceRange ? [...priceRange] : [];
    newRange[index] = value
    setPriceRange(newRange);
};

const numericTimes = data.map(item => parseTime(item.time)); // helper function to convert '60m', '1d' etc. to numeric values in minutes

const minTime = Math.min(...numericTimes);
const maxTime = Math.max(...numericTimes);


const handleTimeSliderChange = newValue => {
    setTimeRange(newValue);
};

const handleTimeInputChange = (index, event) => {
    const value = event.target.value;
    const newRange = timeRange ? [...timeRange] : [];
    newRange[index] = value;
    setTimeRange(newRange);
};
const [priceRange, setPriceRange] = useState([minPrice * 1000, maxPrice * 1000]);
const [timeRange, setTimeRange] = useState([minTime, maxTime]);
const form = useForm({
    initialValues: {
        kategorie: {jizda: true, pronajem: true, taxi: true, akce: true},
        cena: {od: minPrice, do: maxPrice},
        misto: {volna: true, okruh: true},
        cas: {od: minTime, do: maxTime},
        ridic: {ridic: true, spolujezdec: true},
    }
})
function handleSubmit(values){
    values.cena.od = priceRange[0]
    values.cena.do = priceRange[1]
    values.cas.od = timeRange[0]
    values.cas.do = timeRange[1]
    console.log(values)
    setFilteredOffers({filters: values})
}
    return(
        <Modal zIndex={3500} size={"xl"} yOffset={"15vh"} opened={opened} closeButtonProps={{size: "xl"}} onClose={()=>{setOpened(false)}}  title="Filtrovat balíčky" sx={{ backgroundColor: "#fff", width: "80vw",}}>
       <form onSubmit={form.onSubmit(handleSubmit)}>
       <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        <div>
        <Title order={4} size={"1.4rem"} style={{}}>Kategorie</Title>
        <div style={{display: "flex", flexDirection: "column", gap: "3vh", marginTop: "2vh"}}>
           <Checkbox value={"jizda"} color="red" label="Zážitkové jízdy" {...form.getInputProps("kategorie.jizda", {type: "checkbox"})}/>
           <Checkbox value={"pronajem"} color="cyan" label="Pronájem" {...form.getInputProps("kategorie.pronajem", {type: "checkbox"})} />
           <Checkbox value={"taxi"} color="yellow" label="Taxi" {...form.getInputProps("kategorie.taxi", {type: "checkbox"})} />
           <Checkbox value={"akce"} color="grape" label="Akce" {...form.getInputProps("kategorie.akce", {type: "checkbox"})} />
        </div>
        </div>
        <div>
                    <Title order={4} size={"1.4rem"}>Cena</Title>
                    <svg width={300} height={100}>
                        {histogramBins.map((bin, i) => (
                            <Bar
                                key={i}
                                x={xScale(i)}
                                y={yScale(bin)}
                                width={10} // adjust width of the bar
                                height={100 - yScale(bin)}
                                fill="#888"
                            />
                        ))}
                    </svg>
                    <RangeSlider
    marks={[{ value: minPrice, label: minPrice + " Kč" }, { value: maxPrice, label: maxPrice + " Kč" }]}
    min={0}
    max={15000}
    step={500}
    value={priceRange}
    onChange={handleSliderChange}
    color='red'
    sx={{marginBottom: "3vh"}}
/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Text>Od:</Text>
                        <Input
                    
                            type="number" 
                            value={priceRange[0]} 
                            onChange={event => handleInputChange(0, event)} 
                        /> Kč
                    </div>
                    <div>
                        <Text>Do:</Text>
                        <Input
                        
                            type="number" 
                            value={priceRange[1]} 
                            onChange={event => handleInputChange(1, event)} 
                        /> Kč
                    </div>
                </div>
                </div>
        <div>
        <Title order={4} size={"1.4rem"} style={{}}>Místo</Title>
        <div style={{display: "flex", flexDirection: "column", gap: "3vh", marginTop: "2vh"}}>
           <Checkbox value={"jizda"} color="red" label="Volná jízda"  {...form.getInputProps("misto.volna", {type: "checkbox"})} />
           <Checkbox value={"pronajem"} color="red" label="Okruh" {...form.getInputProps("misto.okruh", {type: "checkbox"})} />
  
        </div>
        </div>
        <div>
                <Title order={4} size={"1.4rem"} sx={{marginBottom: "3vh"}}>Délka jízdy</Title>
                <RangeSlider
                color='red'
                    marks={[{ value: minTime, label: `${minTime}h` }, { value: maxTime, label: `${maxTime}h` }]}
                    min={minTime}
                    max={maxTime}
                    step={0.25} // Adjust the step as needed
                    sx={{marginBottom: "3vh"}}
                    label={(value)=> {
                        if(value < 1){
                            return value * 60 + " minut"
                        } else if(1 < value > 2){
                            return value + ". hodiny"
                        }
                        
                        else {
                            return value + " hodin"
                        }
                    }}
                    value={timeRange}
                    onChange={handleTimeSliderChange}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Text>Od:</Text>
                        <Input 
                            type="text" 
                            value={timeRange[0]} 
                            onChange={event => handleTimeInputChange(0, event)} 
                        />
                    </div>
                    <div>
                        <Text>Do:</Text>
                        <Input
                            type="text" 
                            value={timeRange[1]} 
                            onChange={event => handleTimeInputChange(1, event)} 
                        />
                    </div>
                </div>
            </div>
     
        <div>
        <Title order={4} size={"1.4rem"} style={{}}>Řízení</Title>
        <div style={{display: "flex", flexDirection: "column", gap: "3vh", marginTop: "2vh"}}>
           <Checkbox value={"jizda"} color="red" label="Řidič" {...form.getInputProps("ridic.ridic", {type: "checkbox"})}/>
           <Checkbox value={"pronajem"} color="red" label="Spolujezdec"  {...form.getInputProps("ridic.spolujezdec", {type: "checkbox"})} />
           </div>
        </div>
        </div>
     
      
     <div style={{display: "flex", marginTop: "5vh", flexDirection: "column", gap: "1vh"}}>
     <Button color='red' variant="outline" size='lg' sx={{width: "100%", fontSize: "1rem"}} onClick={()=> {form.reset(); setPriceRange([minPrice * 1000, maxPrice * 1000]); setTimeRange([minTime, maxTime])}}>Zrušit všechny filtry</Button>
     <Button color='red' size='lg' sx={{width: "100%", fontSize: "1rem"}} type='submit'>Použít</Button>
     </div>
       </form>
        </Modal>
    )
}