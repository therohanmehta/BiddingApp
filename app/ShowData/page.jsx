"use client";
import React, { useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
// import { doc, getDoc } from "firebase/firestore";

function ShowData() {
  const [allData, setAllData] = useState("");
  //   async function fetchBiddingItems() {
  //     const biddingItemCollectionRef = collection(db, "biddingItem");

  //     try {
  //       const querySnapshot = await getDocs(biddingItemCollectionRef);
  //       const biddingItems = [];

  //       querySnapshot.forEach((doc) => {
  //         // doc.data() is the document data
  //         biddingItems.push({ id: doc.id, ...doc.data() });
  //       });

  //       return biddingItems;
  //     } catch (error) {
  //       console.error("Error fetching bidding items:", error);
  //       return []; // Return an empty array or handle the error appropriately
  //     }
  //   }

  // Usage example
  //   fetchBiddingItems().then((biddingItems) => {
  //     console.log("Bidding items:", biddingItems);
  //   });

  function listenForBiddingItems(callback) {
    const biddingItemCollectionRef = collection(db, "biddingItem");

    const unsubscribe = onSnapshot(
      biddingItemCollectionRef,
      (querySnapshot) => {
        const biddingItems = [];

        querySnapshot.forEach((doc) => {
          // doc.data() is the document data
          biddingItems.push({ id: doc.id, ...doc.data() });
        });

        // Call the callback function with the updated bidding items
        callback(biddingItems);
      }
    );

    // Return the unsubscribe function to stop listening for updates
    return unsubscribe;
  }

  // Usage example
  const unsubscribe = listenForBiddingItems((biddingItems) => {
    // console.log("Bidding items:", biddingItems);
    setAllData(biddingItems);
  });

  return (
    <div>
      <div>Set ALlData</div>
      {/* {JSON.stringify(allData)} */}

      <button onClick={listenForBiddingItems} className="btn btn-2 ">
        {allData && allData.map((ele) => <p key={ele.id}>{ele.Name}</p>)}
        Get Data
      </button>
    </div>
  );
}

export default ShowData;
