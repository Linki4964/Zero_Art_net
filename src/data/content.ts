import type { SiteContent } from '../types'

export const siteContent: SiteContent = {
  siteName: 'ZeroArt',
  tagline: 'Republic of Minecraft',
  heroTitle: ['Republic', 'of', 'Minecraft'],
  heroImage: '/images/introduction-visual.png',

  features: [
    {
      title: 'Forge MOD',
      description: '多个来自Forge平台Mod，让您体验各种新奇玩法',
      image: '/images/work-victory.jpg',
      icon: 'Puzzle',
    },
    {
      title: 'OptiFine & RTX',
      description: '游戏整合Patrix材质包，配合RTX光追加持，让您分不清游戏和现实',
      image: '/images/work-metiew-smith.jpg',
      icon: 'Zap',
    },
    {
      title: 'FREE FOR GAMING',
      description: '整合包及多人房间免费游玩，尽享多人联机乐趣',
      image: '/images/work-alex-nowak.jpg',
      icon: 'Users',
    },
  ],

  specs: [
    {
      label: 'CPU',
      min: '4核心，单核睿频 > 3.0GHz',
      rec: 'Intel i5-12400F / AMD Ryzen 5 5600 或更高',
      icon: 'Cpu',
    },
    {
      label: 'GPU',
      min: '显存 > 2GB（不建议核显）',
      rec: 'NVIDIA GTX 1660 / AMD RX 580 或更高',
      icon: 'Monitor',
    },
    {
      label: 'RAM',
      min: '8GB 以上（游戏占用 ≥ 4GB）',
      rec: '16GB DDR4 3200MHz 或更高',
      icon: 'MemoryStick',
    },
    {
      label: 'ROM',
      min: '2GB 以上磁盘空间（HDD/SSD）',
      rec: 'SSD 10GB 以上可用空间',
      icon: 'HardDrive',
    },
    {
      label: 'OS',
      min: 'Windows 10 20H2 以上（64位）',
      rec: 'Windows 11 64位',
      icon: 'Monitor',
    },
  ],
  specsNote: '我们相信您的电脑应该带的动',

  serverAddress: '34.92.170.206:25565',
  serverLabel: '服务器地址',
  contactEmail: 'ZeroArt@prodesign07.onmicrosoft.com',

  downloads: {
    current: [
      {
        label: 'ROMC 2.0 Beta',
        version: 'MC 1.19.2',
        url: 'https://drive.weixin.qq.com/s?k=AJQA7QdEAG4r7UUAAk',
        badge: '最新发布 2023/08/01',
      },
    ],
    legacy: [
      {
        label: 'ROMC 1.5 Beta',
        version: 'MC 1.16.5',
        url: '#',
        description: '该版本没有在运行的服务器，有需要可自行搭建',
      },
      {
        label: 'ROMC 1.0 正式版',
        version: 'MC 1.12.2',
        url: '#',
        description: '该版本没有在运行的服务器，有需要可自行搭建',
      },
    ],
    tools: [
      {
        label: 'Java JDK 17',
        version: 'MC运行必备',
        url: 'https://www.oracle.com/java/technologies/downloads/#java8-windows',
        description: 'Minecraft 运行必备插件',
      },
      {
        label: 'ROMC 2.0 Beta 教程指引',
        version: '使用指南',
        url: 'https://drive.weixin.qq.com/s?k=AJQA7QdEAG40rD2IkS',
        description: '快速上手 ROMC 整合包',
      },
    ],
  },

  donateImage: '/images/donate-wecom.png',
  donateText: 'Donate US or Join US',
}
