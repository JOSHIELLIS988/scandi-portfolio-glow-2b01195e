interface ReviewProps {
  review: {
    text: string;
    author: string;
    role: string;
  };
  isVisible: boolean;
}

const Review = ({ review, isVisible }: ReviewProps) => {
  return (
    <div
      className={`opacity-0 transition-opacity duration-500 ease-out mt-12 ${
        isVisible ? 'opacity-100' : ''
      }`}
    >
      <div className="glass p-8 rounded-2xl max-w-3xl mx-auto text-center">
        <p className="text-lg mb-4">{review.text}</p>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">{review.author}</span>
          <span className="mx-2">·</span>
          <span>{review.role}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;