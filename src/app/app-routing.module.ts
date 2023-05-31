import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'SignUp', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'CompanySigneUp', loadChildren: () => import('./company-sign-up/company-sign-up.module').then(m => m.CompanySignUpModule) },
  { path: 'ProfileContenet', loadChildren: () => import('./profile-contenet/profile-contenet.module').then(m => m.ProfileContenetModule) },
  { path: 'ProfileAbout', loadChildren: () => import('./profile-about/profile-about.module').then(m => m.ProfileAboutModule) },
  { path: 'About', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'JobSeekerSignUp', loadChildren: () => import('./job-seeker-sign-up/job-seeker-sign-up.module').then(m => m.JobSeekerSignUpModule) },
  { path: 'PostJob', loadChildren: () => import('./post-job/post-job.module').then(m => m.PostJobModule) },
  { path: 'Job', loadChildren: () => import('./job/job.module').then(m => m.JobModule) },
  { path: 'JobDetail', loadChildren: () => import('./job-detail/job-detail.module').then(m => m.JobDetailModule) },
  { path: 'JobApplicationDetail', loadChildren: () => import('./job-application-detail/job-application-detail.module').then(m => m.JobApplicationDetailModule) },
  { path: 'FriendList', loadChildren: () => import('./friend-list/friend-list.module').then(m => m.FriendListModule) },
  { path: 'ApplicationList', loadChildren: () => import('./application-list/application-list.module').then(m => m.ApplicationListModule) },
  { path: 'Blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'Reception', loadChildren: () => import('./reception/reception.module').then(m => m.ReceptionModule) },
  { path: 'Contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'ProfileSettings', loadChildren: () => import('./profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule) },
  { path: 'BrowseCompanies', loadChildren: () => import('./browse-companies/browse-companies.module').then(m => m.BrowseCompaniesModule) },
  { path: 'BrowseJobSeeker', loadChildren: () => import('./browse-job-seeker/browse-job-seeker.module').then(m => m.BrowseJobSeekerModule) },
  { path: 'JobGateServices', loadChildren: () => import('./job-gate-services/job-gate-services.module').then(m => m.JobGateServicesModule) },
  { path: 'PublicProfile', loadChildren: () => import('./public-profile/public-profile.module').then(m => m.PublicProfileModule) },
  { path: 'PublicProfileHome', loadChildren: () => import('./public-profile-home/public-profile-home.module').then(m => m.PublicProfileHomeModule) },
  { path: 'PublicProfileAbout', loadChildren: () => import('./public-profile-about/public-profile-about.module').then(m => m.PublicProfileAboutModule) },
  { path: 'PublicProfileCompanyJobs', loadChildren: () => import('./public-profile-company-jobs/public-profile-company-jobs.module').then(m => m.PublicProfileCompanyJobsModule) },
  { path: 'PublicProfileCompanyEvents', loadChildren: () => import('./public-profile-company-events/public-profile-company-events.module').then(m => m.PublicProfileCompanyEventsModule) },
  { path: 'CompanySpontaniousApplication', loadChildren: () => import('./company-spontanious-application/company-spontanious-application.module').then(m => m.CompanySpontaniousApplicationModule) },
  { path: 'SpontaniousApplication', loadChildren: () => import('./spontanious-application/spontanious-application.module').then(m => m.SpontaniousApplicationModule) },
  { path: 'ProfileSettingsEductions', loadChildren: () => import('./profile-settings-eductions/profile-settings-eductions.module').then(m => m.ProfileSettingsEductionsModule) },
  { path: 'ProfileEvents', loadChildren: () => import('./profile-events/profile-events.module').then(m => m.ProfileEventsModule) },
  { path: 'GetTest', loadChildren: () => import('./get-test/get-test.module').then(m => m.GetTestModule) },
  { path: 'GetQuestions', loadChildren: () => import('./get-questions/get-questions.module').then(m => m.GetQuestionsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
