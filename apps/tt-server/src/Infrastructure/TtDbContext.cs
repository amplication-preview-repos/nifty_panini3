using Microsoft.EntityFrameworkCore;

namespace Tt.Infrastructure;

public class TtDbContext : DbContext
{
    public TtDbContext(DbContextOptions<TtDbContext> options)
        : base(options) { }
}
