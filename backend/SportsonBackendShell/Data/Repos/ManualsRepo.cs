using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class ManualsRepo : IManualsRepo
    {
        public List<ManualsResponse> Handbooks { get; set; }
        public ManualsRepo()
        {
            Handbooks = new List<ManualsResponse>()
            {
                new ManualsResponse {
                    Title = "Barncyklar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=PQ-qpoPeqM0&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=5lKjCn3tulE&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/barn" }
                },
                new ManualsResponse {
                    Title = "Elcyklar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=9bZkp7q19f0&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/elcyklar" }
                },
                new ManualsResponse {
                    Title = "Service & Reservdelar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=oHg5SJYRHA0&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=L_jWHffIx5E&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/service", "https://www.sportson.se/reservdelar" }
                },
                new ManualsResponse {
                    Title = "Mountainbike",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=fJ9rUzIMcZQ&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/mountainbike" }
                },
                new ManualsResponse {
                    Title = "Racercyklar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=kJQP7kiw5Fk&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=3tmd-ClpJxA&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2", "https://www.youtube.com/watch?v=hT_nvWreIhg&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=3" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/racercyklar" }
                },
                new ManualsResponse {
                    Title = "Belysning & Hjälmar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=CevxZvSJLk8&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/tillbehor/cykellyktor", "https://www.sportson.se/tillbehor/cykelhjalmar" }
                },
                new ManualsResponse {
                    Title = "Hybridcyklar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=2Vv-BfVoq4g&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=pRpeEdMmmQ0&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/hybridcyklar" }
                },
                new ManualsResponse {
                    Title = "Däckbyte",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=OPf0YbXqDm0&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/service/dackbyte", "https://www.sportson.se/reservdelar/dack" }
                },
                new ManualsResponse {
                    Title = "Damcyklar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=lp-EO5I60KA&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=YQHsXMglC9A&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/damcyklar" }
                },
                new ManualsResponse {
                    Title = "Korg & Pakethållare",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=ru0K8uYEZWw&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/tillbehor/cykelkorg", "https://www.sportson.se/tillbehor/pakethallare" }
                },
                new ManualsResponse {
                    Title = "Herrcyklar",
                    YoutubeVideoURLs = new List<string> { "https://www.youtube.com/watch?v=uelHwf8o7_U&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT", "https://www.youtube.com/watch?v=sbcWY5QLsoE&list=PLLALQuK1NDrhdCUOFgV9YFZp3vmZR1rgT&index=2" },
                    OtherResourceURLs = new List<string> { "https://www.sportson.se/cyklar/herrcyklar" }
                }
            };
        }


        public async Task<ManualsResponse?> GetManualsForOneHandbook(int id)
        {
            try
            {
                return Handbooks[id];
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
