using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class NewsRepo : INewsRepo
    {
        protected readonly SportsonContext _db;
        protected readonly DbSet<Article> _dbSet;

        public NewsRepo(SportsonContext db)
        {
            _db = db;
            _dbSet = db.Set<Article>();
        }


        public async Task<Article?> GetByIdAsync(int id, bool? asTracking = false)
        {

            var query = _db.Set<Article>().AsQueryable();
            if (asTracking == true)
                query = query.AsTracking();

            return await query.FirstOrDefaultAsync(x => EF.Property<int>(x, "Id") == id);
        }

        public virtual IQueryable<Article> QueryAll() => _dbSet.AsNoTracking();
    }
}
