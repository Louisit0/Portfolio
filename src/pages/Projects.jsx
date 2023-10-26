import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="lg:py-24">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <section id="About" className="flex flex-col mx-6 md:mx-8 lg:mx-0">
          <a
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-white"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Luis Ramirez
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All projects
          </h1>
          <table
            id="content"
            className="mt-12 w-full border-collapse text-left"
          >
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 px-6 py-5 ">
              <tr>
                <th class="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Year
                </th>
                <th class="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Project
                </th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Made at
                </th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div class="block sm:hidden">
                      <span>Harvard Business School Design System</span>
                    </div>
                    <div class="hidden sm:block">
                      Harvard Business School Design System
                    </div>
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div class="translate-y-px whitespace-nowrap">
                    Upstatement
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul class="flex -translate-y-1.5 flex-wrap">
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Storybook
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        React
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="hidden py-4 align-top sm:table-cell">
                  <ul class="translate-y-1 flex flex-row gap-2">
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-5 w-5"
                              aria-hidden="true"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div class="block sm:hidden">
                      <span>Harvard Business School Design System</span>
                    </div>
                    <div class="hidden sm:block">
                      Harvard Business School Design System
                    </div>
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div class="translate-y-px whitespace-nowrap">
                    Upstatement
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul class="flex -translate-y-1.5 flex-wrap">
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Storybook
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        React
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="hidden py-4 align-top sm:table-cell">
                  <ul class="translate-y-1 flex flex-row gap-2">
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-5 w-5"
                              aria-hidden="true"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div class="block sm:hidden">
                      <span>Harvard Business School Design System</span>
                    </div>
                    <div class="hidden sm:block">
                      Harvard Business School Design System
                    </div>
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div class="translate-y-px whitespace-nowrap">
                    Upstatement
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul class="flex -translate-y-1.5 flex-wrap">
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Storybook
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        React
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="hidden py-4 align-top sm:table-cell">
                  <ul class="translate-y-1 flex flex-row gap-2">
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-5 w-5"
                              aria-hidden="true"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div class="block sm:hidden">
                      <span>Harvard Business School Design System</span>
                    </div>
                    <div class="hidden sm:block">
                      Harvard Business School Design System
                    </div>
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div class="translate-y-px whitespace-nowrap">Apple</div>
                </td>
                <td class="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul class="flex -translate-y-1.5 flex-wrap">
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Storybook
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        React
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="hidden py-4 align-top sm:table-cell">
                  <ul class="translate-y-1 flex flex-row gap-2">
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-5 w-5"
                              aria-hidden="true"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div class="block sm:hidden">
                      <span>Harvard Business School Design System</span>
                    </div>
                    <div class="hidden sm:block">
                      Harvard Business School Design System
                    </div>
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div class="translate-y-px whitespace-nowrap">
                    HackBeanpot 2017
                  </div>
                </td>
                <td class="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul class="flex -translate-y-1.5 flex-wrap">
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        WordPress
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Timber
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        WordPress Multisite
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Gutenberg
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Javascript
                      </div>
                    </li>
                    <li class="my-1 mr-1.5">
                      <div class="flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-300 ">
                        Javascript
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="hidden py-4 align-top sm:table-cell">
                  <ul class="translate-y-1 flex flex-row gap-2">
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="h-5 w-5"
                              aria-hidden="true"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="flex items-center">
                      <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-gray-300 focus-visible:text-gray-300   group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="apps.apple.com"
                      >
                        <span>
                          <span class="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default About;
