import React, { useState, useEffect } from 'react'

export const ConversionList = () => {
    //Stuff goes here...

    return (
        <>
            <section>
                <h1>I N G R E D I E N T</h1>
                <h1>M E A S U R E M E N T</h1>
                <h1>C O N V E R S I O N</h1>
            </section>
            <section>
                <div>
                    <input></input>
                </div>
                <div>
                    <p>1</p>
                    <input></input>
                </div>
                <div>
                    <input></input>
                    <p>grams</p>
                </div>
            </section>
            <button>+</button>
            <button>Add Measurement</button>
        </>
    )
}