import React, { useEffect, useState } from "react";
import AddFoodModal from "../components/add-food-modal";
import Layout from "../components/layout";
import "../styles.scss";
import { Food } from "@server/src/types";

// markup
const IndexPage = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((error) => {
        setFoods([]);
        console.log(`error loading foods: ${error}`);
      });
  }, []);

  return (
    <Layout>
      <>
        <title>Calorie Counter 3</title>
        <div className="container m-4">
          <div className="card">
            <div className="card-header level">
              <div className="level-left">
                <p className="level-item card-header-title">Food & Calories</p>
              </div>

              <div className="level-right pr-3">
                <button
                  className="level-item button is-primary"
                  onClick={() => setIsAddOpen(true)}
                >
                  <span className="icon is-small">
                    <i className="fa fa-circle-plus" />
                  </span>
                  <span>Add Food</span>
                </button>
              </div>
            </div>

            <div
              className="card-content"
              style={{ height: "40rem", overflow: "auto" }}
            >
              {/* FOOD ITEM */}
              {foods.length > 0 ? (
                foods.map((food) => (
                  <div key={food.id} className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <span className="icon">
                          <i className="fas fa-bowl-food"></i>
                        </span>
                        {food.name}
                      </div>
                    </div>
                    <div className="level-right">
                      <p className="level-item">{food.calories} cal.</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>Add some foods</div>
              )}
            </div>
          </div>
        </div>
        <AddFoodModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
      </>
    </Layout>
  );
};

export default IndexPage;
``;
