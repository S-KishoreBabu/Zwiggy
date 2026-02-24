import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Header from '../components/Header'
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import DishCard from "../components/DishCard";



describe("testing the header Component",()=> {
    test("Testing nav Bar : ",()=>{
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
            </Provider>
        )
        const about = screen.getByRole('banner');
        const cart = screen.getByText("Cart (0)");
        expect(about).toBeInTheDocument()
        expect(cart).toBeInTheDocument()
    })
    test("Testing Dish Card : ",()=>{
        render(
            <DishCard/>
        )
        const about = screen.getByRole('img');
        expect(about).toBeInTheDocument()
    })
})

