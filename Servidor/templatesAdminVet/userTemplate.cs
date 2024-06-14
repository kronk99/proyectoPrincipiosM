using PetLib;

public class userTemplate{ //class template para obtener datos del Json
    public int id { get; set; }
    public string email { get; set; }
    public string name { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string password { get; set; }
    public Pet[] pets { get; set; }
}