using UserReviewLib;

public class productTemplate{ //class template para obtener datos del Json
    public string code { get; set; }
    public string url { get; set; }
    public string title { get; set; }
    public string description { get; set; }
    public string brand { get; set; }
    public int price { get; set; }
    public int iva { get; set; }
    public int amountAvailable { get; set; }
    public string[] categories { get; set; }
    public int userScore { get; set; }
    public UserReview[] userReviews { get; set; }
}