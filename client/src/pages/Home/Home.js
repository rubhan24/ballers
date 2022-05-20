import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";

function Home() {
  function filterHandler() {
    const filterGame = document.querySelector(".filter-grid");
    filterGame.classList.toggle("hidden");
  }

  const naviagate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="edit-grid">
        <h2 onClick={filterHandler}>Filter</h2>
        <button onClick={() => naviagate("/create-session")}>
          + Make Sesh
        </button>
      </div>

      <div className="filter-grid hidden">
        <form>
          <div className="labels">
            <label for="Area">Area:</label>
            <select name="Area" placeholder="Area">
              <option value="North London">North London</option>
              <option value="West London">West London</option>
              <option value="East London">East London</option>
              <option value="South London">South London</option>
            </select>
          </div>

          <div className="labels">
            <label for="Difficulty">Difficulty:</label>
            <select name="Difficulty">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
        </form>
      </div>

      <div className="game-info">
        <div>
          <h2>Username</h2>
          <h2>Time: 5:00pm</h2>
        </div>
        <h2>Area: North London</h2>
        <h2>Difficulty: Beginner</h2>
        <h2>Players Needed: 1</h2>
        <button className="join-game">Join</button>
      </div>
    </>
  );
}

export default Home;
