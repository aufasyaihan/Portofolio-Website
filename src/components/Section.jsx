/* eslint-disable react/prop-types */
export default function Section({children, id}){

    return(
        <section className="px-10 pt-[85px] mx-16"  id={id}>
            {children}
        </section>
    )
}