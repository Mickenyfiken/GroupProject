using Microsoft.EntityFrameworkCore;
using SportsonBackendShell.Data.Entities.Manual;
using SportsonBackendShell.Data.Interfaces;

namespace SportsonBackendShell.Data.Repos
{
    public class ManualsRepo : IManualsRepo
    {
        protected readonly SportsonContext _db;
        protected readonly DbSet<Manual> _dbSet;
        public ManualsRepo(SportsonContext db)
        {
            _db = db;
            _dbSet = db.Set<Manual>();
        }

        public async Task<Manual?> GetByIdAsync(int id, bool? asTracking = false)
        {
            var query = _db.Set<Manual>().AsQueryable();
            if (asTracking == true)
                query = query.AsTracking();

            return await query.FirstOrDefaultAsync(x => EF.Property<int>(x, "Id") == id);
        }

        public virtual IQueryable<Manual> QueryAll() => _dbSet.AsNoTracking();

    }
}
