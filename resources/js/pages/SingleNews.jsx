import React from "react";
// import img1 from "../assets/images/projects/3.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const SingleNews = () => {
    return (
        <>
            <section className="py-32 relative wrapper">
                <img
                    style={{ width: "60%" }}
                    src={'/assets/images/projects/3.png'}
                    alt=""
                    className="fixed left-1/2 -translate-x-1/2 top-40 -z-10 blur-xl  opacity-50"
                />
                <div className="text-center uppercase mb-5 text-3xl">
                    winner of a new competition
                </div>
                <div className="text-center opacity-50 regular">date: 20.02.2022</div>
                <div className="max-w-lg mt-10 mx-auto text-justify">
                    <p className="mb-5 regular">
                        Design thinking: Adding a single letter creates 92NY, a new
                        shorthand name that shifts the identity away from the world of YMCAs
                        and recommits the institution to the energy of New York. We drew the
                        new abbreviation in a proprietary typeface that will be used across
                        92NY’s offerings.
                    </p>
                    <p className="mb-5 regular">
                        {" "}
                        Challenges: It’s a big decision to change a name that’s seemingly
                        been in use for decades, but the previous name, for all its
                        longevity, had many confusing permutations: for example, “the
                        Ninety-second Street Y,” “Ninety-two Y,” “Nine two Y” or even just
                        “the Y.” The power of 92NY lies in its simplicity.
                    </p>
                    <p className="mb-5 regular">
                        {" "}
                        <img className="w-full" src={'/assets/images/projects/3.png'} alt="" />
                    </p>
                    <p className="mb-5 regular">
                        Favorite details: Type designer Jeremy Mickel of type foundry MCKL
                        created the remastered typeface 92NY Didi and based it on several
                        sources we knew and loved, including the 18th-century Deberny &
                        Peignot cut of Didot featured in the font library Lettera, Vol. 1,
                        collected by Armin Haab and Alex Stocker and published in 1954; CBS
                        Didot, created for the eponymous television network in 1966 by
                        designer Freeman Craw; and ITC Didi by designer Tom Carnese,
                        commissioned by the International Typeface Corporation in 1970.
                        Starting with a sensuous pair of numbers like 9 and 2 and the crisp
                        verticals and diagonals of the N and Y, Jeremy created a typeface
                        both classic and modern.
                    </p>
                    <p className="mb-5 regular">
                        New lessons: You can rent rooms at 92NY, and Harry Connick Jr. lived
                        there when he first moved to New York at age eighteen.
                    </p>
                </div>
                <div className="text-center mt-20">
                    <Link to="/news" className="regular text-center mx-auto">
                        Back to news <FiArrowLeft className="inline-block h-5 w-5" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default SingleNews;
