import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as api from '../api/BreedImages'
import { Spinner } from './Spinner'
import { Chart } from "react-google-charts"

export const Main = props => {
    
    // Hook for getting a reference to the Redux store
    const dispatch = useDispatch();

    // Hook for calling the API
    useEffect(() => {
      api.setImagesCountPerBreed(dispatch);
    }, [props])

    // Hooks for getting the state from the store
    const breeds = ((useSelector(state => state.breeds)).sort((a, b) => (a.count < b.count) ? 1 : -1)).slice(0, 9);
    const spinner = useSelector(state => state.spinner);

    let chartData = [['Breed', 'Number of images']]
    breeds.forEach((breed) => {
      chartData.push([breed.name, breed.count])
    });

    return ( 
      <div id='container'>
        <div id='app'>
          <Chart
            width={'600px'}
            height={'400px'}
            chartType="PieChart"
            data={chartData}
            options={{
              title: 'Top10 dog breeds based on the amount of images',
              is3D: true,
            }}
          />
        </div>
        <Spinner visible={spinner}/>
      </div>
    ) 
}