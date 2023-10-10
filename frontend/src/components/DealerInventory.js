import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/buyer.css';
const DealerInventory = ()=>{
    
      const [inventory, setInventory] = useState([]);
      const [selectedCars, setSelectedCars] = useState([]);
      const [newCar, setNewCar] = useState({
        image: '',
        title: '',
        description: '',
        model_name: '',
        price: '',
        color: '',
        mileage: '',
      });
      const [isLoading, setIsLoading] = useState(true);
    
      // Fetch dealer's inventory on component mount
      useEffect(() => {
        // Fetch dealer's inventory using an API request
        // You can implement this using the Fetch API or Axios
    
        // Example Fetch API usage:
        fetch('https://busy-pink-chinchilla-shoe.cyclic.app/inventory/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include the authorization token if required
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setInventory(data.data);
            setIsLoading(false);
          })
          .catch((error) => console.error('Error fetching inventory:', error));
      }, []);
    
      // Function to handle selecting cars for deletion
      const handleSelectCar = (carId) => {
        if (selectedCars.includes(carId)) {
          setSelectedCars(selectedCars.filter((id) => id !== carId));
        } else {
          setSelectedCars([...selectedCars, carId]);
        }
      };
    
      // Function to handle deleting selected cars
      const handleDeleteCars = () => {
        // Send a request to delete selected cars using an API endpoint
        // You can implement this using the Fetch API or Axios
        const data = { ids: selectedCars };
    
        // Example Fetch API usage:
        fetch('https://busy-pink-chinchilla-shoe.cyclic.app/inventory/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Include the authorization token if required
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === 'Cars deleted successfully') {
              // Update the inventory state after deletion
              setInventory(inventory.filter((car) => !selectedCars.includes(car._id)));
              setSelectedCars([]);
              alert('Cars deleted successfully')
            }else{
                alert('No cars found for deletion,Its probably not your deal')
            }
          })
          .catch((error) => console.error('Error deleting cars:', error));
      };
    
      // Function to handle adding a new car to inventory
      const handleAddCar = () => {
        // Send a request to add a new car to inventory using an API endpoint
        // You can implement this using the Fetch API or Axios
        const data = { ...newCar };
    
        // Example Fetch API usage:
        fetch('https://busy-pink-chinchilla-shoe.cyclic.app/inventory/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Include the authorization token if required
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              // Update the inventory state after adding the new car
              setInventory([...inventory, data.data]);
              setNewCar({
                image: '',
                title: '',
                description: '',
                model_name: '',
                price: '',
                color: '',
                mileage: '',
                major_scratches :'',
                original_paint:'',
                accidents: '',
                previous_buyer:'',
                registration_place:''
              });
            } else {
              console.log('Error adding car:', data.message);
            }
          })
          .catch((error) => console.log('Error adding car:', error));
      };
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h2>Dealer Inventory</h2>
          <Link to="/oem">OEM Specs Dashboard</Link>
          <div>
            <button onClick={handleDeleteCars}>Delete Selected</button>
          </div>
          <div>
            <h3>Add New Car</h3>
            <div>
              <input
                type="text"
                placeholder="Image URL"
                value={newCar.image}
                onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={newCar.title}
                onChange={(e) => setNewCar({ ...newCar, title: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Description"
                value={newCar.description}
                onChange={(e) => setNewCar({ ...newCar, description: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Model Name"
                value={newCar.model_name}
                onChange={(e) => setNewCar({ ...newCar, model_name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Price"
                value={newCar.price}
                onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Color"
                value={newCar.color}
                onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Mileage"
                value={newCar.mileage}
                onChange={(e) => setNewCar({ ...newCar, mileage: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Scratches"
                value={newCar.major_scratches}
                onChange={(e) => setNewCar({ ...newCar, major_scratches: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Original Paint"
                value={newCar.original_paint}
                onChange={(e) => setNewCar({ ...newCar, original_paint: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="accidents"
                value={newCar.accidents}
                onChange={(e) => setNewCar({ ...newCar, accidents: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="previous buyer"
                value={newCar.pervious_buyer}
                onChange={(e) => setNewCar({ ...newCar, previous_buyer: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="registration_place"
                value={newCar.registration_place}
                onChange={(e) => setNewCar({ ...newCar, registration_place: e.target.value })}
              />
            </div>
            <button onClick={handleAddCar}>Add Car</button>
          </div>
          <div className="inventory-container">
            {inventory.map((car) => (
              <div key={car._id} className="inventory-card">
                
                <img src={car.image} alt={car.title} />
                <h3>{car.title}</h3>
                <p>Price: {car.price}</p>
                <p>Color: {car.color}</p>
                <p>Mileage: {car.mileage}</p>
                <button onClick={() => handleSelectCar(car._id)}>
                  {selectedCars.includes(car._id) ? 'Unselect' : 'Select'}
                </button>
                <Link to={`/inventory/${car._id}`}>View More</Link>
              </div>
            ))}
          </div>
        </div>
      );
    
    
}
export default DealerInventory;