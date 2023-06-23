namespace TopLeague.ViewModels
{
    public class AddClubVM
    {
        public string ClubName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public int FoundedYear { get; set; }
        public string League { get; set; }//later fk from League
        public string LinkLogo { get; set; }
    }
}
