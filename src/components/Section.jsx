/* eslint-disable react/prop-types */
export default function Section({children, id}){

    return(
        <section className="pt-[85px]"  id={id}>
            {children}
        </section>
    )
}