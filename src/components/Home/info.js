import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-am-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              quae veniam optio earum adipisci incidunt a unde et molestiae
              minus sint dolorem autem, quo quis quod dolores quam rem suscipit
              porro modi ducimus nulla nostrum distinctio. Placeat, sit qui!
              Error omnis impedit quisquam voluptates saepe eligendi sit animi
              similique expedita nemo libero quod nobis temporibus facilis
              excepturi inventore tenetur laboriosam, eos fugit voluptatem.
              Harum doloremque, inventore quibusdam, ea magni illo qui sed
              deleniti facilis nulla officia totam maiores asperiores
              praesentium beatae exercitationem reiciendis quaerat non
              aspernatur veritatis, eius eaque nobis possimus labore. Culpa
              minus quod nobis veritatis labore tempore eum.
            </p>
            <Link to="/about/">
              <button
                className="btn text-uppsecase
              btn-yellow"
              >
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
