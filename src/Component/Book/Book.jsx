import { MdOutlineStarRate } from "react-icons/md";

const Book = ({book}) => {
    const{image,book_name,author,category,tags,rating}=book
    return (
        <div className="card border text-start p-6 space-y-4">
        <figure>
          <img
          className="rounded-2xl"
            src={image}
            alt="" />
        </figure>
        <div className="space-y-4">
        <div className="flex gap-4 text-[#23BE0A] font-medium text-base">
          <p>#{tags[0]}</p>
          <p>#{tags[1]}</p>
        </div>
          <h2 className="text-2xl font-bold text-[#131313]">{book_name}</h2>
          <p className="text-base font-medium text-[#131313CC]">By: {author}</p>
          <hr />
          <div className="flex justify-between text-base font-medium text-[#131313CC] ">
            <p>{category}</p>
            <div className="flex items-center justify-center">
              <p>{rating}</p>
              <MdOutlineStarRate className="w-5"></MdOutlineStarRate>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Book;