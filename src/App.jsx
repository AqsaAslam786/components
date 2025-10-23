
import './App.css'
import SimpleComponents from './components/SimpleComponents'

function App() {


  return (
    <>
      <div className='flex gap-5'>


        <SimpleComponents
          name="Aqsa"
          image="https://images.unsplash.com/photo-1761165308046-174a56e73525?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
          hobbies={["Book Reading", "Learn Code"]}
          degree="BS(IT)"

        />
        <SimpleComponents
          name="Fahad"
          image="https://plus.unsplash.com/premium_photo-1761210594096-38d74e09cd26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
          hobbies={["Book Reading", "Learn Code"]}

          degree="BS(Electrical)" />
        <SimpleComponents
          name="Ali"
          image="https://plus.unsplash.com/premium_photo-1682146137633-3ad7802125ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
          hobbies={["Book Reading", "Learn Code"]}

          degree="BS(CS)" />
      </div>




    </>
  )
}

export default App
