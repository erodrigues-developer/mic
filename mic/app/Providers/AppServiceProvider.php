<?php

namespace App\Providers;

use App\Repositories\Contracts\AssociateRepositoryInterface;
use App\Repositories\Contracts\BaseRepositoryInterface;
use App\Repositories\Contracts\ProviderRepositoryInterface;
use App\Repositories\Eloquent\AssociateRepository;
use App\Repositories\Eloquent\BaseRepository;
use App\Repositories\Eloquent\ProviderRepository;
use App\Strategies\Contracts\ViaCepStrategyInterface;
use App\Strategies\ViaCepStrategy;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(BaseRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(AssociateRepositoryInterface::class, AssociateRepository::class);
        $this->app->bind(ProviderRepositoryInterface::class, ProviderRepository::class);
        $this->app->bind(ViaCepStrategyInterface::class, ViaCepStrategy::class);

        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
